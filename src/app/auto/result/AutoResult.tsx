'use client';
import ResultImage from '@/components/ResultImage';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEdit, faCheck } from '@fortawesome/free-solid-svg-icons';
import ResultList from '@/components/ResultList';
import { useState } from 'react';
import { getSocket } from '@/utils/socket';

export type Result = {
  myId: string;
  myTeamId: number;
  teams: Team[];
};

export type Team = {
  id: number;
  name: string;
  icon: string;
  members: TeamMate[];
};

export type TeamMate = {
  id: string;
  nickname: string;
};

export default function AutoResult({ myId, myTeamId, teams }: Result) {
  let myTeamName = teams.find(team => team.id === myTeamId)?.name ?? '미정팀';
  let myTeamIcon = teams.find(team => team.id === myTeamId)?.icon ?? '🐼';
  const [displayingTeams, setTeams] = useState(teams);
  const [myName, setMyName] = useState(
    teams.find(team => team.id === myTeamId)?.members.find(member => member.id === myId)
      ?.nickname ?? '멤버 0'
  );
  let [canChangeName, setCanChangeName] = useState(false);
  let socket = getSocket();

  socket.on('nameChanged', ({ id, newName }: { id: string; newName: string }) => {
    let newTeams = [...displayingTeams];
    newTeams.map(team => {
      console.log(team);
      let changedMate = team.members.find(member => member.id === id);
      if (changedMate) {
        changedMate.nickname = newName;
      }
    });
    setTeams(newTeams);
  });

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
          className=" underline underline-offset-4 w-[55px] text-center"
          maxLength={5}
          value={myName}
          onChange={e => setMyName(e.target.value)}
          disabled={!canChangeName}
        ></input>
        <p>입니다!</p>
        <button
          onClick={() => {
            if (canChangeName) {
              socket?.emit('changeName', myName);
            }
            setCanChangeName(!canChangeName);
          }}
        >
          {canChangeName ? (
            <FontAwesomeIcon icon={faCheck} color="green" className="ml-2"></FontAwesomeIcon>
          ) : (
            <FontAwesomeIcon icon={faEdit} className="ml-2"></FontAwesomeIcon>
          )}
        </button>
      </div>
      <ResultList teams={displayingTeams}></ResultList>
    </div>
  );
}
