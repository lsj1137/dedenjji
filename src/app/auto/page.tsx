'use client';
import Button from '@/components/Button';
import Counter from '@/components/Counter';
import Header from '@/components/Header';
import showToast from '@/utils/toast';
import Link from 'next/link';
import { useState } from 'react';

export default function Auto() {
  const peopleMinimum = 2;
  const teamMinimum = 2;
  const [people, setPeople] = useState(peopleMinimum);
  const [team, setTeam] = useState(teamMinimum);

  const handleClick = (e: React.MouseEvent) => {
    if (people < peopleMinimum || team < teamMinimum) {
      e.preventDefault();
      if (people < peopleMinimum) {
        showToast(`인원 수는 ${peopleMinimum} 이상 이어야 해요!`);
        setPeople(peopleMinimum);
      } else {
        showToast(`팀 수는 ${teamMinimum} 이상 이어야 해요!`);
        setTeam(teamMinimum);
      }
    }
  };

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
        <Counter
          count={people}
          objectName="인원 수"
          minimum={peopleMinimum}
          onChange={setPeople}
        ></Counter>
        <div className="h-6"></div>
        <Counter count={team} objectName="팀 수" minimum={teamMinimum} onChange={setTeam}></Counter>
      </div>
      <Link
        href={{
          pathname: '/auto/result',
          query: { total: people, team },
        }}
        onClick={handleClick}
      >
        <Button color="var(--color-menuRed)" content="나누기" onClick={() => {}}></Button>
      </Link>
    </div>
  );
}
