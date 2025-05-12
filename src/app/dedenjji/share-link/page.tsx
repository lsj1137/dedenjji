'use client';

import Connects from '@/components/Connects';
import Header from '@/components/Header';
import Share from '@/components/Share';
import { useSearchParams } from 'next/navigation';
import { useState } from 'react';

export default function ShareLink() {
  const searchParams = useSearchParams();
  const total = searchParams.get('total');
  const [currentUser, setCurrentUser] = useState(0);

  return (
    <div>
      <Header title="데덴찌" goHome={false} canSet={true} onSet={() => {}}></Header>
      <Connects color="var(--color-menuRed)" currentUser={currentUser} totalUsers={Number(total)} />
      <Share shareUrl="https://www.3jun.store"></Share>
    </div>
  );
}
