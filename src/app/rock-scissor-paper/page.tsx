'use client';
// import Button from '@/components/Button';
// import Counter from '@/components/Counter';
import Header from '@/components/Header';
// import Link from 'next/link';
// import { useState } from 'react';

export default function RockScissorPaper() {
  // const [people, setPeople] = useState(0);
  // const [team, setTeam] = useState(0);

  return (
    <div>
      <Header title="가위바위보" goHome={false} canSet={false}></Header>
      <div className=" flex flex-col items-center justify-center h-[300px] font-bold text-center gap-5">
        <p className="text-5xl ">⛏️</p>
        <p className="text-xl ">개발중입니다..</p>
      </div>
      {/* <div className="my-20">
        <Counter count={people} objectName="인원 수" onChange={setPeople}></Counter>
      </div>
      <Link
        href={{
          pathname: '/rock-scissor-paper/share-link',
          query: { total: people },
        }}
      >
        <Button color="var(--color-menuBlue)" content="결투 시작" onClick={() => {}}></Button>
      </Link> */}
    </div>
  );
}
