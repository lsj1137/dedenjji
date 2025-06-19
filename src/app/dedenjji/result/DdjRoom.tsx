'use client';

import Connects from '@/components/Connects';
import Header from '@/components/Header';
import Share from '@/components/Share';
import { getRandomRoomId, getSocket } from '@/utils/socket';
import { useSearchParams } from 'next/navigation';
import { useEffect, useRef, useState } from 'react';
import Play from '@/components/Play';
import RspOptions from './DdjOptions';
import Button from '@/components/Button';
import DdjResult from './DdjResult';
import { toResult } from '@/utils/ddjResultConverter';
import { DdjResultType, ddjResponse } from '@/types/global';

export default function DdjRoom() {
  const searchParams = useSearchParams();
  const total = searchParams.get('total');
  const inviteCode = searchParams.get('inviteCode');
  const [shareUrl, setUrl] = useState('');
  const [currentUser, setCurrentUser] = useState<number>(0);
  const [allJoined, setAllJoined] = useState<boolean>(false);
  const [showResult, setShowResult] = useState<boolean>(false);
  const [ddjResult, setResult] = useState<DdjResultType>();
  const [countDown, setCountDown] = useState<number>(3);
  const [selected, setSelected] = useState<string>('abstention');
  const resultRef = useRef(ddjResult);
  const timerInterval = useRef<NodeJS.Timeout>(null);
  const socket = getSocket();

  function ddjResultHandler(result: ddjResponse) {
    const newResult: DdjResultType = toResult(socket.id ?? '', result);
    setResult(newResult);
    setShowResult(true);
  }

  function replayDdjHandler() {
    setSelected('abstention');
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

    socket.on('ddjResult', ddjResultHandler);
    socket.on('startReplay', replayDdjHandler);

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
      socket.off('ddjResult', ddjResultHandler);
      socket.off('startReplay', replayDdjHandler);
    };
  }, []);

  useEffect(() => {
    resultRef.current = ddjResult;
  }, [ddjResult]);

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
      socket.emit('submitDdjChoice', selected);
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
        showResult && ddjResult ? (
          <DdjResult
            type={ddjResult?.type ?? 'fail'}
            myId={ddjResult?.myId ?? '0'}
            myTeamName={ddjResult?.myTeamName ?? '기권'}
            myTeamId={ddjResult?.myTeamId ?? 0}
            teams={ddjResult?.teams ?? []}
            changeName={(newName: string) => {
              socket?.emit('changeName', newName);
            }}
          ></DdjResult>
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
            socket.emit('replay');
          }}
        ></Button>
      )}
    </div>
  );
}
