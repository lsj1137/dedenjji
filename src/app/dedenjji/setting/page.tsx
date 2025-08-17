'use client';
import Header from '@/components/Header';
import SettingOptionDropdown from '@/components/SettingOptionDropdown';
import { DedenjjiTeams } from '@/types/teamTypes';
import { useDedenjjiTeamStore } from '@/store/useStore';
import Button from '@/components/Button';
import { useRouter } from 'next/navigation';
import SettingOptionToggleButton from '@/components/SettingOptionToggleButton';

export default function Auto() {
  const { teamType, setTeamType, autoSubmit, setAutoSubmit } = useDedenjjiTeamStore();
  const router = useRouter();

  return (
    <div>
      <Header title="설정" goHomeWhenPop={false} canSet={false}></Header>
      <div className="flex flex-col gap-10 my-20">
        <SettingOptionDropdown
          title="팀 종류"
          selected={teamType}
          setSelected={setTeamType}
          optionList={DedenjjiTeams}
        ></SettingOptionDropdown>
        <SettingOptionToggleButton
          title="기권 없음 (자동 선택)"
          isActive={autoSubmit}
          setIsActive={setAutoSubmit}
          activeColor="var(--color-menuGreen)"
        ></SettingOptionToggleButton>
      </div>
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
