import { ConnectsProps } from '@/types/global';

export default function Connects({ currentUser, totalUsers, color }: ConnectsProps) {
  return (
    <div
      className={`flex justify-between items-center w-full my-4 px-5 text-header font-semibold`}
      style={{ color: color }}
    >
      <p>현재 접속자</p>
      <p>
        {currentUser}/{totalUsers}
      </p>
    </div>
  );
}
