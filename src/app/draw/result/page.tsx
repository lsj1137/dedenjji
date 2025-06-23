import { Suspense } from 'react';
import DrawResult from './DrawResult';
import GlobalLoading from '@/app/loading';

export default function Page() {
  return (
    <Suspense fallback={GlobalLoading()}>
      <DrawResult />
    </Suspense>
  );
}
