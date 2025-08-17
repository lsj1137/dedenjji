'use client';
import Header from '@/components/Header';
import SettingOptionDropdown from '@/components/SettingOptionDropdown';
import { AutoTeams } from '@/types/teamTypes';
import { useAutoTeamStore } from '@/store/useStore';
import Button from '@/components/Button';
import { useRouter } from 'next/navigation';

export default function Auto() {
  const { teamType, setTeamType } = useAutoTeamStore();
  const router = useRouter();

  return (
    <div>
      <Header title="설정" goHomeWhenPop={false} canSet={false}></Header>
      <div className="flex flex-col gap-10 my-20">
        <SettingOptionDropdown
          title="팀 종류"
          selected={teamType}
          setSelected={setTeamType}
          optionList={AutoTeams}
        ></SettingOptionDropdown>
      </div>
      <Button
        color="var(--color-menuRed)"
        content="완료"
        onClick={() => {
          router.back();
        }}
      ></Button>
    </div>
  );
}
