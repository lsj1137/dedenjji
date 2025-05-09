'use client';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft } from '@fortawesome/free-solid-svg-icons';
import { faHome } from '@fortawesome/free-solid-svg-icons';
import { faGear } from '@fortawesome/free-solid-svg-icons';
import { useRouter } from 'next/navigation';

type HeaderProps = {
  goHome: boolean;
  canSet: boolean;
  onSet?: () => void;
  title: string;
};

export default function Header({ goHome, canSet, onSet, title }: HeaderProps) {
  const router = useRouter();
  return (
    <header className="flex justify-between items-center py-4">
      <button onClick={goHome ? () => router.push('/') : () => router.back()} className="flex p-4">
        <FontAwesomeIcon icon={faChevronLeft} />
        {goHome && <FontAwesomeIcon icon={faHome} />}
      </button>
      <h1 className="text-header font-bold">{title}</h1>
      {canSet ? (
        <button onClick={onSet} className="p-4">
          <FontAwesomeIcon icon={faGear} />
        </button>
      ) : (
        <div className="w-12"></div>
      )}
    </header>
  );
}
