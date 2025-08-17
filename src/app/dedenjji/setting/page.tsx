'use client';
import Header from '@/components/Header';
import SettingOptionDropdown from '@/components/SettingOptionDropdown';
import { DedenjjiTeams } from '@/types/teamTypes';
import { useDedenjjiTeamStore } from '@/store/useStore';
import Button from '@/components/Button';
import { useRouter } from 'next/navigation';

export default function Auto() {
  const { teamType, setTeamType } = useDedenjjiTeamStore();
  const router = useRouter();

  return (
    <div>
      <Header title="자동" goHomeWhenPop={false} canSet={false}></Header>
      <SettingOptionDropdown
        title="팀 종류"
        selected={teamType}
        setSelected={setTeamType}
        optionList={DedenjjiTeams}
      ></SettingOptionDropdown>
      <Button
        color="var(--color-menuGreen)"
        textColor="black"
        content="완료"
        onClick={() => {
          router.back();
        }}
      ></Button>
    </div>
  );
}
