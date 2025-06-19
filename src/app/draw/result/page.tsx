import { Suspense } from 'react';
import DrawResult from './DrawResult';

export default function Page() {
  return (
    <Suspense>
      <DrawResult />
    </Suspense>
  );
}
