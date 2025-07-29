// store/useStore.ts
import { AutoTeams, TeamData } from '@/types/teamTypes';
import { create } from 'zustand';

interface AutoTeamTypeState {
  teamType: TeamData;
  setTeamType: (teamData: TeamData) => void;
}

export const useAutoTeamStore = create<AutoTeamTypeState>(set => ({
  teamType: AutoTeams[0],
  setTeamType: teamData => set({ teamType: teamData }),
}));
