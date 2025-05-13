import { Suspense } from 'react';
import AutoRoom from './AutoRoom';

export default function Page() {
  return (
    <Suspense fallback={<p>로딩 중...</p>}>
      <AutoRoom />
    </Suspense>
  );
}
