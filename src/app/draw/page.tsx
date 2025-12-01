'use client';
import Button from '@/components/Button';
import Counter from '@/components/Counter';
import Header from '@/components/Header';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useState } from 'react';

export default function Draw() {
  const [people, setPeople] = useState(4);
  const [win, setWin] = useState(0);
  const router = useRouter();

  return (
    <div>
      <Header
        title="제비뽑기"
        goHomeWhenPop={false}
        canSet={true}
        onSet={() => {
          router.push('/draw/setting');
        }}
      ></Header>
      <div className="my-20">
        <Counter count={people} objectName="제비 수" minimum={1} onChange={setPeople}></Counter>
        <div className="h-6"></div>
        <Counter count={win} objectName="당첨(또는 꽝) 수" minimum={0} onChange={setWin}></Counter>
      </div>
      <Link
        href={{
          pathname: '/draw/result',
          query: { total: people, win: win },
        }}
      >
        <Button
          color="var(--color-menuYellow)"
          content="뽑기"
          onClick={() => {}}
          textColor="black"
        ></Button>
      </Link>
    </div>
  );
}
