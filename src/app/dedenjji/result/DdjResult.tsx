'use client';
import ResultImage from '@/components/ResultImage';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEdit, faCheck } from '@fortawesome/free-solid-svg-icons';
import ResultList from '@/components/ResultList';
import { useState } from 'react';

export default function DdjResult({
  type,
  teamType,
  myId,
  myTeamName,
  myTeamId,
  teams,
  changeName,
}: DdjResultType) {
  const myTeamIcon =
    type === 'fail'
      ? '😥'
      : myTeamName === teamType.teamInfos[0][1]
        ? teamType.teamInfos[0][0]
        : teamType.teamInfos[1][0];
  const [myName, setMyName] = useState(
    teams.find(team => team.id === myTeamId)?.members.find(member => member.id === myId)?.name ??
      '멤버 0'
  );
  const [canChangeName, setCanChangeName] = useState(false);

  return (
    <div className="flex flex-col items-center">
      <ResultImage isPositive={type === 'success'} icon={myTeamIcon}></ResultImage>
      <div className="flex justify-center items-center my-6 gap-1">
        {type === 'success' ? (
          <div className="flex gap-1 items-center">
            <p>당신은 </p>
            <p className="font-extrabold text-[20px]">{myTeamName} 팀</p>
            <p>입니다!</p>
          </div>
        ) : (
          <p>팀 나누기에 실패했습니다..</p>
        )}
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
      <ResultList teams={teams} isTeam={true}></ResultList>
      <div className="h-20"></div>
    </div>
  );
}
