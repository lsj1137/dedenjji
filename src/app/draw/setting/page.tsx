'use client';
import Header from '@/components/Header';
import { useDrawSettingStore } from '@/store/useStore';
import Button from '@/components/Button';
import { useRouter } from 'next/navigation';
import SettingOptionToggleButton from '@/components/SettingOptionToggleButton';

export default function Auto() {
  const { showIndex, setShowIndex } = useDrawSettingStore();
  const router = useRouter();

  return (
    <div>
      <Header title="설정" goHomeWhenPop={false} canSet={false}></Header>
      <div className="flex flex-col gap-10 my-20">
        <SettingOptionToggleButton
          title="당첨 제비 숫자 표시"
          isActive={showIndex}
          setIsActive={setShowIndex}
          activeColor="var(--color-menuYellow)"
        ></SettingOptionToggleButton>
      </div>
      <Button
        color="var(--color-menuYellow)"
        textColor="black"
        content="완료"
        onClick={() => {
          router.back();
        }}
      ></Button>
    </div>
  );
}
