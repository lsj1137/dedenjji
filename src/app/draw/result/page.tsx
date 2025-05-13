import { Suspense } from 'react';
import DrawResult from './DrawResult';

export default function Page() {
  return (
    <Suspense fallback={<p>로딩 중...</p>}>
      <DrawResult />
    </Suspense>
  );
}
