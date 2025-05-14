'use client';
import Button from '@/components/Button';
import Counter from '@/components/Counter';
import Header from '@/components/Header';
import Link from 'next/link';
import { useState } from 'react';

export default function Dedenjji() {
  const [people, setPeople] = useState(2);

  return (
    <div>
      <Header
        title="데덴찌"
        goHome={false}
        canSet={true}
        onSet={() => {
          console.log('hi');
        }}
      ></Header>
      <div className="my-20">
        <Counter count={people} objectName="인원 수" minimum={2} onChange={setPeople}></Counter>
      </div>
      <Link
        href={{
          pathname: '/dedenjji/result',
          query: { total: people },
        }}
      >
        <Button color="var(--color-menuGreen)" content="나누기" onClick={() => {}}></Button>
      </Link>
    </div>
  );
}
