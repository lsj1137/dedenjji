import { getSocket } from './socket';
import { animals, TeamData, TeamType } from '../types/teamTypes';

export async function splitTeams(
  total: number,
  teamCount: number,
  teamData: TeamData
): Promise<Result> {
  const response: participantsResponse = await getRoomMembers();
  const myRoom = response.participants;
  const myId = response.id;
  let myTeamId = 0;

  const allMembers: { userId: string; name: string }[] = Array.from(new Array(total), (_, i) => {
    if (i < myRoom.length) {
      return myRoom[i];
    }
    return { userId: (i + 1).toString(), name: `멤버 ${i + 1}` };
  });
  allMembers.sort(() => Math.random() - 0.5);
  const teams: Team[] = new Array(teamCount);
  const teamInfos: teamInfo[] = generateTeamInfo(teamCount, teamData);
  const peoplePerTeam = total / teamCount;
  for (let i = 0; i < teamCount; i++) {
    const teamMembers = allMembers.slice(i * peoplePerTeam, (i + 1) * peoplePerTeam);
    if (teamMembers.find(member => member.userId === myId) !== undefined) {
      myTeamId = i;
    }
    teams[i] = {
      id: i,
      name: teamInfos[i].name,
      icon: teamInfos[i].icon,
      members: teamMembers.map(member => {
        return {
          id: member.userId,
          name: member.name,
        };
      }),
    };
  }

  return { myId, myTeamId, teams };
}

function getRoomMembers(): Promise<participantsResponse> {
  const socket = getSocket();
  return new Promise((resolve, reject) => {
    socket.emit('getRoomMembers', {}, (response: participantsResponse) => {
      resolve(response);
    });

    setTimeout(() => {
      reject(new Error('서버 응답 시간 초과'));
    }, 3000);
  });
}

function generateTeamInfo(teamCount: number, teamData: TeamData): teamInfo[] {
  let candidates: string[][] = teamData.teamInfos;
  const mixedTeams = candidates.sort(() => Math.random() - 0.5);
  const teamInfo = mixedTeams.slice(0, teamCount).map(team => {
    return { icon: team[0], name: team[1] };
  });
  return teamInfo;
}
