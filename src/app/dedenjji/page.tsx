'use client';
import Header from '@/components/Header';
// import { useState } from 'react';

export default function Dedenjji() {
  // const [people, setPeople] = useState(0);
  // const [team, setTeam] = useState(0);

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
      <div className=" flex flex-col items-center justify-center h-[300px] font-bold text-center gap-5">
        <p className="text-5xl ">⛏️</p>
        <p className="text-xl ">개발중입니다..</p>
      </div>
      {/* <div className="my-20">
        <Counter count={people} objectName="인원 수" onChange={setPeople}></Counter>
      </div>
      <Link
        href={{
          pathname: '/dedenjji/share-link',
          query: { total: people },
        }}
      >
        <Button color="var(--color-menuGreen)" content="나누기" onClick={() => {}}></Button>
      </Link> */}
    </div>
  );
}
