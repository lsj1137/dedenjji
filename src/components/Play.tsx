import { ReactElement } from 'react';

export default function Play({ count, options }: { count: number; options: ReactElement }) {
  return (
    <div className="flex flex-col gap-9 items-center">
      <p className="text-center">
        카운트가 끝나기 전에
        <br />
        선택해주세요.
      </p>
      <h1 className="text-[50px]">{count}</h1>
      {options}
    </div>
  );
}
