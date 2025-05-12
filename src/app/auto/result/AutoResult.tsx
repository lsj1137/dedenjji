'use client';
import ResultImage from '@/components/ResultImage';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEdit } from '@fortawesome/free-solid-svg-icons';
import ResultList from '@/components/ResultList';

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
  let myName =
    teams.find(team => team.id === myTeamId)?.members.find(member => member.id === myId)
      ?.nickname ?? '멤버 0';

  return (
    <div>
      <ResultImage isPositive={true} icon={myTeamIcon}></ResultImage>
      <div className="flex justify-center items-center my-6 gap-2">
        <p>당신은</p>
        <p className="font-extrabold text-[20px]">{myTeamName}팀</p>
        <p>입니다!</p>
      </div>
      <div className="flex justify-center items-center gap-2">
        <p>그리고 당신의 이름은 </p>
        <p className=" underline"> {myName} </p>
        <p>입니다!</p>
        <FontAwesomeIcon icon={faEdit} className="ml-2"></FontAwesomeIcon>
      </div>
      <ResultList teams={teams}></ResultList>
    </div>
  );
}
