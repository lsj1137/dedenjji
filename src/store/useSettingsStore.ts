// store/useStore.ts
import { AutoTeams, DedenjjiTeams, TeamData } from '@/types/teamTypes';
import { create } from 'zustand';

interface AutoTeamTypeState {
  teamType: TeamData;
  setTeamType: (teamData: TeamData) => void;
}

export const useAutoTeamStore = create<AutoTeamTypeState>(set => ({
  teamType: AutoTeams[0],
  setTeamType: teamData => set({ teamType: teamData }),
}));

interface DedenjjiSettingStore {
  teamType: TeamData;
  autoSubmit: boolean;
  setTeamType: (teamData: TeamData) => void;
  setAutoSubmit: (autoSubmit: boolean) => void;
}

export const useDedenjjiTeamStore = create<DedenjjiSettingStore>(set => ({
  teamType: DedenjjiTeams[0],
  autoSubmit: false,
  setTeamType: teamData => set({ teamType: teamData }),
  setAutoSubmit: autoSubmit => set({ autoSubmit: autoSubmit }),
}));

interface drawSettingStore {
  showIndex: boolean;
  setShowIndex: (showIndex: boolean) => void;
}

export const useDrawSettingStore = create<drawSettingStore>(set => ({
  showIndex: false,
  setShowIndex: showValue => set({ showIndex: showValue }),
}));

interface rspSettingStore {
  autoSubmit: boolean;
  setAutoSubmit: (autoSubmit: boolean) => void;
}

export const useRspSettingStore = create<rspSettingStore>(set => ({
  autoSubmit: false,
  setAutoSubmit: autoSubmit => set({ autoSubmit: autoSubmit }),
}));
