'use client';
import { useState } from 'react';
import AutoWaiting from './AutoWaiting';
import Header from '@/components/Header';
import SettingOptionDropdown from '@/components/SettingOptionDropdown';
import { AutoTeams } from '@/types/teamTypes';
import { useAutoTeamStore } from '@/store/useStore';

export default function Auto() {
  const peopleMinimum = 2;
  const teamMinimum = 2;
  const [people, setPeople] = useState(peopleMinimum);
  const [team, setTeam] = useState(teamMinimum);
  const [isSetting, setIsSetting] = useState(false);
  const { teamType, setTeamType } = useAutoTeamStore();

  return (
    <div>
      <Header
        title="자동"
        goHomeWhenPop={false}
        canPop={!isSetting}
        canSet={!isSetting}
        onSet={() => setIsSetting(prev => !prev)}
        onPop={isSetting ? () => setIsSetting(prev => !prev) : () => {}}
      ></Header>
      {isSetting ? (
        <SettingOptionDropdown
          title="팀 종류"
          selected={teamType}
          setSelected={setTeamType}
          optionList={AutoTeams}
          setIsSetting={setIsSetting}
        ></SettingOptionDropdown>
      ) : (
        <AutoWaiting
          peopleMinimum={peopleMinimum}
          teamMinimum={teamMinimum}
          people={people}
          setPeople={setPeople}
          team={team}
          setTeam={setTeam}
        ></AutoWaiting>
      )}
    </div>
  );
}
