import { Suspense } from 'react';
import RspRoom from './RspRoom';
import GlobalLoading from '@/app/loading';

export default function Page() {
  return (
    <Suspense fallback={GlobalLoading()}>
      <RspRoom />
    </Suspense>
  );
}
