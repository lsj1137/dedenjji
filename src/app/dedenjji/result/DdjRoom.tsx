'use client';

import Connects from '@/components/Connects';
import Header from '@/components/Header';
import Share from '@/components/Share';
import { getRandomRoomId, getSocket } from '@/utils/socket';
import { useSearchParams } from 'next/navigation';
import { useEffect, useRef, useState } from 'react';
import AutoResult, { Result } from '../../auto/result/AutoResult';
import Play from '@/components/Play';
import RspOptions from './DdjOptions';
import Button from '@/components/Button';

export default function RspRoom() {
  const searchParams = useSearchParams();
  const total = searchParams.get('total');
  const inviteCode = searchParams.get('inviteCode');
  const [shareUrl, setUrl] = useState('');
  const [currentUser, setCurrentUser] = useState<number>(0);
  const [allJoined, setAllJoined] = useState<boolean>(false);
  const [showResult, setShowResult] = useState<boolean>(false);
  const [splitResult, setResult] = useState<Result>();
  const [countDown, setCountDown] = useState<number>(3);
  const [selected, setSelected] = useState<string>('');
  const resultRef = useRef(splitResult);
  const timerInterval = useRef<NodeJS.Timeout>(null);

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
        changedMate.name = newName;
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
      name: `멤버 ${currentUser + 1}`,
    });
    return () => {
      socket.emit('leaveRoom');
    };
  }, []);

  useEffect(() => {
    resultRef.current = splitResult;
  }, [splitResult]);

  useEffect(() => {
    if (currentUser === Number(total)) {
      setAllJoined(true);
      timerInterval.current = setInterval(() => {
        setCountDown(prev => {
          if (prev > 0) {
            return prev - 1;
          } else return prev;
        });
      }, 1000);
    }
  }, [currentUser]);

  useEffect(() => {
    if (countDown < 1) {
      setShowResult(true);
      if (timerInterval.current) {
        clearInterval(timerInterval.current);
      }
    }
  }, [countDown]);

  return (
    <div className="h-full">
      <Header title="데덴찌" goHome={false} canSet={true} onSet={() => {}}></Header>
      <Connects
        color="var(--color-textGreen)"
        currentUser={currentUser}
        totalUsers={Number(total)}
      />
      {allJoined ? (
        showResult ? (
          <AutoResult
            myId={splitResult?.myId ?? '0'}
            myTeamId={splitResult?.myTeamId ?? 0}
            teams={splitResult?.teams ?? []}
            changeName={(newName: string) => {
              socket?.emit('changeName', newName);
            }}
          ></AutoResult>
        ) : (
          <Play
            count={countDown}
            options={<RspOptions selected={selected} setSelected={setSelected}></RspOptions>}
          ></Play>
        )
      ) : (
        <Share shareUrl={shareUrl}></Share>
      )}
      {showResult && (
        <Button
          content={'재경기'}
          color="var(--color-menuGreen)"
          onClick={() => {
            setShowResult(false);
          }}
        ></Button>
      )}
    </div>
  );
}
