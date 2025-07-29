'use client';
import Button from '@/components/Button';
import Counter from '@/components/Counter';
import Header from '@/components/Header';
import showToast from '@/utils/toast';
import Link from 'next/link';
import { useState } from 'react';

export default function RockScissorPaper() {
  const peopleMinimum = 2;
  const [people, setPeople] = useState(2);

  const handleClick = (e: React.MouseEvent) => {
    if (people < peopleMinimum) {
      e.preventDefault();
      if (people < peopleMinimum) {
        showToast(`인원 수는 ${peopleMinimum} 이상 이어야 해요!`);
        setPeople(peopleMinimum);
      }
    }
  };

  return (
    <div>
      <Header title="가위바위보" goHomeWhenPop={false} canSet={false}></Header>
      <div className="my-20">
        <Counter count={people} objectName="인원 수" minimum={2} onChange={setPeople}></Counter>
      </div>
      <Link
        href={{
          pathname: '/rock-scissor-paper/result',
          query: { total: people },
        }}
        onClick={handleClick}
      >
        <Button color="var(--color-menuBlue)" content="대결 시작" onClick={() => {}}></Button>
      </Link>
    </div>
  );
}
