'use client';
import ResultImage from '@/components/ResultImage';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEdit, faCheck } from '@fortawesome/free-solid-svg-icons';
import ResultList from '@/components/ResultList';
import { useState } from 'react';

export default function AutoResult({ myId, myTeamId, teams, changeName }: Result) {
  const myTeamName = teams.find(team => team.id === myTeamId)?.name ?? '미정';
  const myTeamIcon = teams.find(team => team.id === myTeamId)?.icon ?? '🐼';
  const [myName, setMyName] = useState(
    teams.find(team => team.id === myTeamId)?.members.find(member => member.id === myId)?.name ??
      '멤버 0'
  );
  const [canChangeName, setCanChangeName] = useState(false);

  return (
    <div className="flex flex-col items-center">
      <ResultImage isPositive={true} icon={myTeamIcon}></ResultImage>
      <div className="flex justify-center items-center my-6 gap-2">
        <p>당신은</p>
        <p className="font-extrabold text-[20px]">{myTeamName}팀</p>
        <p>입니다!</p>
      </div>
      <div className="flex justify-center items-center gap-2">
        <p>그리고 당신의 이름은 </p>
        <input
          className="underline underline-offset-4 w-[55px] text-center"
          maxLength={5}
          value={myName}
          onChange={e => setMyName(e.target.value)}
          disabled={!canChangeName}
        ></input>
        <p>입니다!</p>
        <button
          onClick={() => {
            if (canChangeName) {
              changeName!(myName);
            }
            setCanChangeName(prev => !prev);
          }}
        >
          {canChangeName ? (
            <FontAwesomeIcon icon={faCheck} color="green" className="ml-2"></FontAwesomeIcon>
          ) : (
            <FontAwesomeIcon icon={faEdit} className="ml-2"></FontAwesomeIcon>
          )}
        </button>
      </div>
      <ResultList teams={teams}></ResultList>
      <div className='h-20'></div>
    </div>
  );
}
