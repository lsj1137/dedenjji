'use client';
import Header from '@/components/Header';
import SettingOptionDropdown from '@/components/SettingOptionDropdown';
import { DedenjjiTeams } from '@/types/teamTypes';
import { useDedenjjiTeamStore, useRspSettingStore } from '@/store/useSettingsStore';
import Button from '@/components/Button';
import { useRouter } from 'next/navigation';
import SettingOptionToggleButton from '@/components/SettingOptionToggleButton';

export default function Auto() {
  const { autoSubmit, setAutoSubmit } = useRspSettingStore();
  const router = useRouter();

  return (
    <div>
      <Header title="설정" goHomeWhenPop={false} canSet={false}></Header>
      <div className="flex flex-col gap-10 my-20">
        <SettingOptionToggleButton
          title="기권 없음 (자동 선택)"
          isActive={autoSubmit}
          setIsActive={setAutoSubmit}
          activeColor="var(--color-menuBlue)"
        ></SettingOptionToggleButton>
      </div>
      <Button
        color="var(--color-menuBlue)"
        content="완료"
        onClick={() => {
          router.back();
        }}
      ></Button>
    </div>
  );
}
