'use client';
import Header from '@/components/Header';
import SettingOptionDropdown from '@/components/SettingOptionDropdown';
import { AutoTeams } from '@/types/teamTypes';
import { useAutoTeamStore } from '@/store/useStore';

export default function Auto() {
  const { teamType, setTeamType } = useAutoTeamStore();

  return (
    <div>
      <Header title="자동" goHomeWhenPop={false} canSet={false}></Header>
      <SettingOptionDropdown
        title="팀 종류"
        selected={teamType}
        setSelected={setTeamType}
        optionList={AutoTeams}
      ></SettingOptionDropdown>
    </div>
  );
}
