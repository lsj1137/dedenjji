'use client';

import Option from './Option';
import { faWandMagicSparkles } from '@fortawesome/free-solid-svg-icons';
import { faFlag } from '@fortawesome/free-solid-svg-icons';
import { faHandBackFist } from '@fortawesome/free-regular-svg-icons';
import { faHandScissors } from '@fortawesome/free-regular-svg-icons';
import { faHand } from '@fortawesome/free-regular-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Link from 'next/link';
import { useEffect, useState } from 'react';

export default function Menu() {
  const [screenWidth, setScreenWidth] = useState(400);

  useEffect(() => {
    setScreenWidth(window.innerWidth);
  }, []);

  return (
    <div className="flex flex-col flex-3">
      <div className="flex">
        <div className="flex-1 transform -rotate-3 translate-x-1.5 z-10">
          <Link href="/auto">
            <Option
              color="var(--color-menuRed)"
              title="자동"
              content="모든 인원을 랜덤하게 지정한 팀수로 나눕니다."
              icon={
                <FontAwesomeIcon
                  icon={faWandMagicSparkles}
                  size={screenWidth > 350 ? '4x' : '3x'}
                ></FontAwesomeIcon>
              }
            ></Option>
          </Link>
        </div>
        <div className="flex-1 transform rotate-3 translate-y-3.5 -translate-x-1.5 z-40">
          <Link href="/draw">
            <Option
              color="var(--color-menuYellow)"
              title="제비뽑기"
              content="여러 개의 선택지 중에 하나씩 선택하며 결과를 확인합니다."
              icon={
                <FontAwesomeIcon
                  icon={faFlag}
                  size={screenWidth > 350 ? '4x' : '3x'}
                ></FontAwesomeIcon>
              }
            ></Option>
          </Link>
        </div>
      </div>
      <div className="flex">
        <div className="flex-1 transform rotate-3 translate-x-1.5 z-20">
          <Link href="/rock-scissor-paper">
            <Option
              color="var(--color-menuBlue)"
              title="가위바위보"
              content="여럿이 함께 가위바위보를 합니다."
              icon={<RockScissorPaper screenWidth={screenWidth} />}
            ></Option>
          </Link>
        </div>
        <div className="flex-1 transform -rotate-3 translate-y-3.5 -translate-x-1.5 z-30">
          <Link href="/dedenjji">
            <Option
              color="var(--color-menuGreen)"
              title="데덴찌"
              content="본인의 선택에 따라 두 팀 중 하나에 소속됩니다."
              icon={<Dedenjji screenWidth={screenWidth} />}
            ></Option>
          </Link>
        </div>
      </div>
    </div>
  );
}

function RockScissorPaper({ screenWidth }: { screenWidth: number }) {
  return (
    <div className="flex justify-center gap-3">
      <FontAwesomeIcon
        icon={faHandBackFist}
        size={screenWidth > 350 ? '4x' : '3x'}
        className="rotate-70"
      ></FontAwesomeIcon>
      <FontAwesomeIcon
        icon={faHandScissors}
        size={screenWidth > 350 ? '4x' : '3x'}
        className="rotate-20"
      ></FontAwesomeIcon>
    </div>
  );
}

function Dedenjji({ screenWidth }: { screenWidth: number }) {
  return (
    <div className="flex justify-center gap-3">
      <FontAwesomeIcon
        icon={faHand}
        size={screenWidth > 350 ? '4x' : '3x'}
        className="rotate-20"
      ></FontAwesomeIcon>
      <FontAwesomeIcon
        icon={faHand}
        size={screenWidth > 350 ? '4x' : '3x'}
        className="-rotate-30"
      ></FontAwesomeIcon>
    </div>
  );
}
