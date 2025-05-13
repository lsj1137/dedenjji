'use client';

import Button from '@/components/Button';
import Connects from '@/components/Connects';
import Header from '@/components/Header';
import Share from '@/components/Share';
import { getRandomRoomId, getSocket } from '@/utils/socket';
import { useSearchParams } from 'next/navigation';
import { useEffect, useRef, useState } from 'react';
import AutoResult, { Result } from '../../auto/result/AutoResult';
import { splitTeams } from '@/utils/autoSplitting';

export default function ShareLink() {
  const searchParams = useSearchParams();
  const total = searchParams.get('total');
  const team = searchParams.get('team');
  const inviteCode = searchParams.get('inviteCode');
  const [shareUrl, setUrl] = useState('');
  const [currentUser, setCurrentUser] = useState<number>(0);
  const [showResult, setShowResult] = useState<boolean>(false);
  const [splitResult, setResult] = useState<Result>();
  const resultRef = useRef(splitResult);

  const socket = getSocket();

  socket.on('roomJoined', info => {
    setCurrentUser(info.participants.length);
  });

  socket.on('roomExited', info => {
    setCurrentUser(info.participants.length);
  });

  socket.on('receiveResult', result => {
    setResult(result);
    setShowResult(true);
  });

  socket.on('nameChanged', ({ id, newName }: { id: string; newName: string }) => {
    const newTeams = [...resultRef.current!.teams];
    newTeams.map(team => {
      const changedMate = team.members.find(member => member.id === id);
      if (changedMate) {
        changedMate.nickname = newName;
      }
    });
    resultRef.current!.teams = newTeams;
    const newResult = {
      ...resultRef.current!,
      teams: newTeams,
    };
    setResult(newResult);
  });

  useEffect(() => {
    let tempCode = '';
    if (inviteCode) {
      setUrl(`${window.location.href}`);
    } else {
      tempCode = getRandomRoomId();
      setUrl(`${window.location.href}&inviteCode=${tempCode}`);
    }
    socket.emit('joinRoom', {
      roomId: inviteCode ?? tempCode,
      nickname: `멤버 ${currentUser + 1}`,
    });
    return () => {
      socket.emit('leaveRoom');
    };
  }, []);

  useEffect(() => {
    resultRef.current = splitResult;
  }, [splitResult]);

  return (
    <div className="h-full">
      <Header title="자동" goHome={false} canSet={true} onSet={() => {}}></Header>
      <Connects color="var(--color-menuRed)" currentUser={currentUser} totalUsers={Number(total)} />
      {showResult ? (
        <AutoResult
          myId={splitResult?.myId ?? '0'}
          myTeamId={splitResult?.myTeamId ?? 0}
          teams={splitResult?.teams ?? []}
          changeName={(newName: string) => {
            socket?.emit('changeName', newName);
          }}
        ></AutoResult>
      ) : (
        <Share shareUrl={shareUrl}></Share>
      )}
      <div className="absolute bottom-5 w-[400px]">
        {showResult ? (
          <Button
            content={'팀 다시 나누기'}
            color="var(--color-menuRed)"
            onClick={() => {
              setShowResult(false);
            }}
          ></Button>
        ) : (
          <Button
            content="팀 확인하기"
            color="var(--color-menuRed)"
            onClick={async () => {
              const teamSplitResult = await splitTeams(Number(total), Number(team));
              socket.emit('sendResult', teamSplitResult);
              setResult(teamSplitResult);
              setShowResult(true);
            }}
          ></Button>
        )}
      </div>
    </div>
  );
}
