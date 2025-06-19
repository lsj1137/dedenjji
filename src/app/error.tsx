'use client';

import { useEffect } from 'react';

export default function GlobalError({ error, reset }: ErrorProps) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <div className="flex flex-col items-center justify-center h-screen p-4 text-center">
      <h1 className="text-2xl font-bold mb-2">에러가 발생했습니다.</h1>
      <p className="mb-4 text-gray-600">문제가 발생하여 페이지를 로드할 수 없습니다.</p>
      <button
        className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
        onClick={() => reset()}
      >
        다시 시도
      </button>
    </div>
  );
}
