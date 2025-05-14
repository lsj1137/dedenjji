'use client';

import Connects from '@/components/Connects';
import Header from '@/components/Header';
import Share from '@/components/Share';
import { getRandomRoomId, getSocket } from '@/utils/socket';
import { useSearchParams } from 'next/navigation';
import { useEffect, useRef, useState } from 'react';
import Play from '@/components/Play';
import RspOptions from './RspOptions';
import Button from '@/components/Button';
import { rspResponse, toResult } from '@/utils/rspResultConverter';
import RspResult, { RspResultType } from './RspResult';

export default function RspRoom() {
  const searchParams = useSearchParams();
  const total = searchParams.get('total');
  const inviteCode = searchParams.get('inviteCode');
  const [shareUrl, setUrl] = useState('');
  const [currentUser, setCurrentUser] = useState<number>(0);
  const [allJoined, setAllJoined] = useState<boolean>(false);
  const [showResult, setShowResult] = useState<boolean>(false);
  const [rspResult, setResult] = useState<RspResultType>();
  const [countDown, setCountDown] = useState<number>(3);
  const [selected, setSelected] = useState<string>('abstention');
  const [round, setRound] = useState<number>(1);
  const resultRef = useRef(rspResult);
  const timerInterval = useRef<NodeJS.Timeout>(null);

  const socket = getSocket();

  function rspResultHandler(result: rspResponse) {
    let newResult: RspResultType = toResult(socket.id ?? '', result);
    setResult(newResult);
    setShowResult(true);
  }

  function replayRspHandler(newRound: number) {
    setSelected('abstention');
    setRound(newRound);
    setCountDown(3);
    setShowResult(false);
    timerInterval.current = setInterval(() => {
      setCountDown(prev => {
        if (prev > 0) {
          return prev - 1;
        } else return prev;
      });
    }, 1000);
  }

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

    socket.on('roomJoined', info => {
      setCurrentUser(info.participants.length);
    });

    socket.on('roomExited', info => {
      setCurrentUser(info.participants.length);
    });

    socket.on('rspResult', rspResultHandler);

    socket.on('startReplayRsp', replayRspHandler);

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

    return () => {
      socket.emit('leaveRoom');
      socket.off('startReplayRsp', replayRspHandler);
      socket.off('rspResult', rspResultHandler);
    };
  }, []);

  useEffect(() => {
    resultRef.current = rspResult;
  }, [rspResult]);

  useEffect(() => {
    if (currentUser === Number(total)) {
      setAllJoined(true);
      if (!timerInterval.current) {
        timerInterval.current = setInterval(() => {
          setCountDown(prev => {
            if (prev > 0) {
              return prev - 1;
            } else return prev;
          });
        }, 1000);
      }
    }
  }, [currentUser]);

  useEffect(() => {
    if (countDown < 1) {
      socket.emit('submitRspChoice', selected);
      setShowResult(true);
      if (timerInterval.current) {
        clearInterval(timerInterval.current);
      }
    }
  }, [countDown]);

  return (
    <div className="h-full">
      <Header title="가위바위보" goHome={false} canSet={true} onSet={() => {}}></Header>
      <Connects
        color="var(--color-menuBlue)"
        currentUser={currentUser}
        totalUsers={Number(total)}
      />
      {allJoined ? (
        showResult && rspResult ? (
          <RspResult
            myId={rspResult?.myId ?? '0'}
            myTeamId={rspResult?.myTeamId ?? 0}
            win={rspResult?.win ?? 'win'}
            teams={rspResult?.teams ?? []}
            changeName={(newName: string) => {
              socket?.emit('changeName', newName);
            }}
          ></RspResult>
        ) : (
          <Play
            count={countDown}
            options={<RspOptions selected={selected} setSelected={setSelected}></RspOptions>}
          ></Play>
        )
      ) : (
        <Share shareUrl={shareUrl}></Share>
      )}
      <div className="h-20 w-[400px]" />
      <div className="absolute bottom-5 w-[400px]">
        {showResult && (
          <Button
            content={'재경기'}
            color="var(--color-menuBlue)"
            onClick={() => {
              socket.emit('replayRsp', round + 1);
            }}
          ></Button>
        )}
      </div>
    </div>
  );
}
