import { Suspense } from 'react';
import ShareLink from './ShareLink';

export default function Page() {
  return (
    <Suspense fallback={<p>로딩 중...</p>}>
      <ShareLink />
    </Suspense>
  );
}
