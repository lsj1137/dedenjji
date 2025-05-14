import { Suspense } from 'react';
import DdjRoom from './DdjRoom';

export default function Page() {
  return (
    <Suspense fallback={<p>로딩 중...</p>}>
      <DdjRoom />
    </Suspense>
  );
}
