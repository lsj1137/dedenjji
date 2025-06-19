'use client';

import Header from '@/components/Header';
import DrawList from './DrawList';
import { useSearchParams } from 'next/navigation';

export default function DrawResult() {
  const searchParams = useSearchParams();
  const total = searchParams.get('total');
  const win = searchParams.get('win');

  return (
    <div className="flex flex-col h-dvh">
      <Header
        title="제비뽑기"
        goHome={false}
        canSet={true}
        onSet={() => {
          console.log('hi');
        }}
      ></Header>
      <div className="flex flex-col gap-3 text-center font-semibold">
        <p className="text-normal">
          원하는 종이를 고르고 결과를 확인 후<br />
          다음 사람에게 넘겨주세요.
        </p>
        <p className="text-description">※ 뽑힌 종이는 3초 후 사라집니다</p>
      </div>
      <DrawList total={Number(total)} win={Number(win)}></DrawList>
    </div>
  );
}
