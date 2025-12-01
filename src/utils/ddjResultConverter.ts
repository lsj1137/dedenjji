import { DedenjjiTeams } from "@/types/teamTypes";

export function toResult(id: string, result: ddjResponse): DdjResultType {
  const newResult: DdjResultType = {
    type: result.type,
    teamType: DedenjjiTeams[0],
    myId: id,
    myTeamName: '기권',
    myTeamId: 0,
    teams: [],
  };
  for (const team of DedenjjiTeams) {
    if(result.teamType === team.teamType.toString()) {
      newResult.teamType = team;
      if (result.choice === 'upside') {
        newResult.myTeamName = team.teamInfos[0][1];
      } else if (result.choice === 'downside') {
        newResult.myTeamName = team.teamInfos[1][1];
      }
    }
  }
  
  let teamId = 0;
  if (result.choice === 'upside') {
    newResult.myTeamId = teamId;
  }
  if (result.upside && result.upside.length > 0) {
    newResult.teams.push({
      id: teamId++,
      icon: newResult.teamType.teamInfos[0][0],
      members: result.upside,
      name: newResult.teamType.teamInfos[0][1],
    });
  }
  if (result.choice === 'downside') {
    newResult.myTeamId = teamId;
  }
  if (result.downside && result.downside.length > 0) {
    newResult.teams.push({
      id: teamId++,
      icon: newResult.teamType.teamInfos[1][0],
      members: result.downside,
      name: newResult.teamType.teamInfos[1][1],
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
