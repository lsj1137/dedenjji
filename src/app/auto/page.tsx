'use client';
import Button from '@/components/Button';
import Counter from '@/components/Counter';
import Header from '@/components/Header';
import Link from 'next/link';
import { useState } from 'react';

export default function Auto() {
  const [people, setPeople] = useState(2);
  const [team, setTeam] = useState(2);

  return (
    <div>
      <Header
        title="자동"
        goHome={false}
        canSet={true}
        onSet={() => {
          console.log('hi');
        }}
      ></Header>
      <div className="my-20">
        <Counter count={people} objectName="인원 수" minimum={2} onChange={setPeople}></Counter>
        <div className="h-6"></div>
        <Counter count={team} objectName="팀 수" minimum={2} onChange={setTeam}></Counter>
      </div>
      <Link
        href={{
          pathname: '/auto/result',
          query: { total: people, team },
        }}
      >
        <Button color="var(--color-menuRed)" content="나누기" onClick={() => {}}></Button>
      </Link>
    </div>
  );
}
