import { TeamMate } from '@/app/auto/result/AutoResult';
import { RspResultType } from '@/app/rock-scissor-paper/result/RspResult';

export type rspResponse = {
  type: 'win' | 'lose' | 'draw';
  choice: string;
  winChoice?: string;
  rock?: [];
  scissors?: [];
  paper?: [];
  abstention?: [];
};

export function toResult(id: string, result: rspResponse): RspResultType {
  const newResult: RspResultType = {
    myId: id,
    myTeamId: 0,
    win: result.type === 'draw' ? 'draw' : result.winChoice === result.choice ? 'win' : 'lose',
    teams: [],
  };
  let teamId = 0;
  if (result.choice === 'rock') {
    newResult.myTeamId = teamId;
  }
  if (result.rock && result.rock.length > 0) {
    newResult.teams.push({
      id: teamId++,
      name: '바위',
      icon: '✊',
      members: result.rock.map((member: { id: string; name: string }): TeamMate => {
        return { id: member.id, name: member.name };
      }),
    });
  }
  if (result.choice === 'scissors') {
    newResult.myTeamId = teamId;
  }
  if (result.scissors && result.scissors.length > 0) {
    newResult.teams.push({
      id: teamId++,
      name: '가위',
      icon: '✌️',
      members: result.scissors.map((member: { id: string; name: string }) => {
        return { id: member.id, name: member.name };
      }),
    });
  }
  if (result.choice === 'paper') {
    newResult.myTeamId = teamId;
  }
  if (result.paper && result.paper.length > 0) {
    newResult.teams.push({
      id: teamId++,
      name: '보',
      icon: '✋',
      members: result.paper.map((member: { id: string; name: string }) => {
        return { id: member.id, name: member.name };
      }),
    });
  }
  if (result.choice === 'abstention') {
    newResult.myTeamId = teamId;
  }
  if (result.abstention && result.abstention.length > 0) {
    newResult.teams.push({
      id: teamId++,
      name: '기권',
      icon: '🏳️',
      members: result.abstention.map((member: { id: string; name: string }) => {
        return { id: member.id, name: member.name };
      }),
    });
  }
  return newResult;
}
