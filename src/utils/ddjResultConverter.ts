import { DdjResultType } from '@/app/dedenjji/result/DdjResult';

export type ddjResponse = {
  type: string;
  choice: string;
  upside?: [];
  downside?: [];
  abstention?: [];
};

export function toResult(id: string, result: ddjResponse): DdjResultType {
  const newResult: DdjResultType = {
    type: result.type,
    myId: id,
    myTeamName: result.choice === 'upside' ? '위' : '아래',
    myTeamId: 0,
    teams: [],
  };
  let teamId = 0;
  if (result.choice === 'upside') {
    newResult.myTeamId = teamId;
  }
  if (result.upside && result.upside.length > 0) {
    newResult.teams.push({
      id: teamId++,
      icon: '☝️',
      members: result.upside,
      name: '위',
    });
  }
  if (result.choice === 'downside') {
    newResult.myTeamId = teamId;
  }
  if (result.downside && result.downside.length > 0) {
    newResult.teams.push({
      id: teamId++,
      icon: '👇',
      members: result.downside,
      name: '아래',
    });
  }
  if (result.choice === 'abstention') {
    newResult.myTeamId = teamId;
  }
  if (result.abstention && result.abstention.length > 0) {
    newResult.teams.push({
      id: teamId++,
      icon: '🏳️',
      members: result.abstention,
      name: '기권',
    });
  }

  return newResult;
}
