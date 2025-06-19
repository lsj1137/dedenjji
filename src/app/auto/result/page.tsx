import { Suspense } from 'react';
import AutoRoom from './AutoRoom';
import GlobalLoading from '@/app/loading';

export default function Page() {
  return (
    <Suspense fallback={GlobalLoading()}>
      <AutoRoom />
    </Suspense>
  );
}
