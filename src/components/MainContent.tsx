'use client';

import Help from '@/components/Help';
import Menu from '@/components/Menu';
import { useState } from 'react';

export default function MainContent() {
  const [showHelp, setShowHelp] = useState(false);

  return (
    <>
      {showHelp ? (
        <Help setShowHelp={setShowHelp}></Help>
      ) : (
        <div
          className="absolute top-3 right-3 w-8 h-8 rounded-[16px] border-textGray border-[1px] text-textGray text-[20px] bg-white flex items-center justify-center cursor-pointer"
          onClick={() => setShowHelp(prev => !prev)}
        >
          ?
        </div>
      )}

      <div className="flex flex-col h-full">
        <div className="flex flex-1 flex-col font-schoolbell text-center  justify-center items-center">
          <p className="text-title">De Den JJi</p>
          <p className="text-description">Korean-style team splitting</p>
        </div>
        <Menu></Menu>
      </div>
      <footer className="absolute bottom-2 left-[50%] -translate-x-1/2 text-center text-textGray">
        <p>by Se Jun Lim</p>
        <p>lsj1137jsl@gmail.com</p>
      </footer>
    </>
  );
}
