'use client';
import { useState } from 'react';
import AutoWaiting from './AutoWaiting';
import Header from '@/components/Header';
import { useRouter } from 'next/navigation';

export default function Auto() {
  const peopleMinimum = 2;
  const teamMinimum = 2;
  const [people, setPeople] = useState(peopleMinimum);
  const [team, setTeam] = useState(teamMinimum);
  const router = useRouter();

  return (
    <div>
      <Header
        title="자동"
        goHomeWhenPop={false}
        canSet={true}
        onSet={() => router.push('auto/setting')}
      ></Header>
      <AutoWaiting
        peopleMinimum={peopleMinimum}
        teamMinimum={teamMinimum}
        people={people}
        setPeople={setPeople}
        team={team}
        setTeam={setTeam}
      ></AutoWaiting>
    </div>
  );
}
