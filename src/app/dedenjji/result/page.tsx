import { Suspense } from 'react';
import DdjRoom from './DdjRoom';
import GlobalLoading from '@/app/loading';

export default function Page() {
  return (
    <Suspense fallback={GlobalLoading()}>
      <DdjRoom />
    </Suspense>
  );
}
