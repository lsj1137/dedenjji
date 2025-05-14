import { Suspense } from 'react';
import RspRoom from './RspRoom';

export default function Page() {
  return (
    <Suspense fallback={<p>로딩 중...</p>}>
      <RspRoom />
    </Suspense>
  );
}
