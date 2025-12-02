'use client';

import {
  faWandMagicSparkles,
  faFlag,
  faXmark,
  faQrcode,
  faLink,
  faUsers,
  faPlay,
} from '@fortawesome/free-solid-svg-icons';
import { faHandBackFist, faHandScissors, faHand } from '@fortawesome/free-regular-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Dispatch, SetStateAction } from 'react';

interface HelpProps {
  setShowHelp: Dispatch<SetStateAction<boolean>>;
}

export default function Help({ setShowHelp }: HelpProps) {
  const helpItems = [
    {
      title: '자동 (Auto Split)',
      description:
        '인원 수와 팀 개수만 입력하면 끝! 친구들이 다 모이지 않아도 바로 결과를 확인할 수 있어 가장 빨라요.',
      tag: '혼자/같이',
      color: 'var(--color-menuRed)',
      icon: <FontAwesomeIcon icon={faWandMagicSparkles} size="lg" />,
    },
    {
      title: '제비뽑기 (Draw Lots)',
      description:
        '대기방 없이 바로 시작! 순서 정하기, 벌칙자 선정 등 가벼운 운세가 필요할 때 사용하세요.',
      tag: '즉시실행',
      color: 'var(--color-menuYellow)',
      icon: <FontAwesomeIcon icon={faFlag} size="lg" />,
    },
    {
      title: '가위바위보 (Rock Paper Scissors)',
      description:
        '친구들이 모두 모이면 시작하세요! 실시간으로 승패를 확인하고 1등을 가릴 수 있어요.',
      tag: '다함께',
      color: 'var(--color-menuBlue)',
      icon: (
        <div className="flex gap-1">
          <FontAwesomeIcon icon={faHandBackFist} size="sm" className="rotate-12" />
          <FontAwesomeIcon icon={faHandScissors} size="sm" className="-rotate-12" />
        </div>
      ),
    },
    {
      title: '데덴찌 (Dedenjji)',
      description: '친구들이 모두 모이면 시작하세요! 모두가 손바닥을 뒤집으면 팀이 나뉘어요.',
      tag: '다함께',
      color: 'var(--color-menuGreen)',
      icon: (
        <div className="flex gap-1">
          <FontAwesomeIcon icon={faHand} size="sm" />
          <FontAwesomeIcon icon={faHand} size="sm" className="rotate-180" />
        </div>
      ),
    },
  ];

  return (
    <div className="absolute inset-0 z-50 flex items-center justify-center bg-black/40 p-4 animate-fadeIn">
      <div className="w-full max-w-[360px] bg-white rounded-2xl shadow-xl overflow-hidden flex flex-col max-h-[85vh]">
        {/* 헤더 */}
        <div className="flex justify-between items-center p-4 border-b border-gray-100 bg-gray-50">
          <h2 className="text-xl font-bold text-gray-800 font-schoolbell">How to play?</h2>
          <button
            onClick={() => setShowHelp(false)}
            className="w-8 h-8 flex items-center justify-center rounded-full hover:bg-gray-200 transition-colors text-gray-500"
          >
            <FontAwesomeIcon icon={faXmark} size="lg" />
          </button>
        </div>

        {/* 메인 컨텐츠 (스크롤 영역) */}
        <div className="overflow-y-auto p-0">
          {/* 메뉴별 상세 설명 */}
          <div className="p-2">
            {helpItems.map((item, index) => (
              <div
                key={index}
                className={`flex items-start gap-4 p-4 ${
                  index !== helpItems.length - 1 ? 'border-b border-gray-100' : ''
                }`}
              >
                {/* 아이콘 */}
                <div
                  className="flex-shrink-0 w-12 h-12 flex items-center justify-center rounded-full"
                  style={{
                    color: item.color,
                    backgroundColor: `${item.color}15`,
                  }}
                >
                  {item.icon}
                </div>

                {/* 텍스트 */}
                <div className="flex-1">
                  <div className="flex justify-between items-center mb-1">
                    <h3 className="font-bold text-gray-800 text-sm max-w-[190px]">{item.title}</h3>
                    {/* 태그 (혼자/다함께 등) */}
                    <span className="text-[10px] max-w-fit font-bold px-1.5 py-0.5 rounded bg-gray-100 text-gray-500">
                      {item.tag}
                    </span>
                  </div>
                  <p className="text-xs text-gray-500 leading-relaxed break-keep">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* 1. 기본 이용 가이드 (대기방 설명) */}
          <div className="bg-blue-50 p-5 m-4 mt-0 rounded-xl border border-blue-100">
            <h3 className="font-bold text-gray-800 text-sm mb-3 flex items-center gap-2">
              <span className="bg-blue-500 text-white w-5 h-5 rounded-full flex items-center justify-center text-xs">
                !
              </span>
              친구들과 함께 즐기는 법
            </h3>
            <div className="space-y-3">
              <div className="flex items-center gap-3 text-sm text-gray-600">
                <div className="w-8 h-8 rounded-lg bg-white flex items-center justify-center text-blue-500 shadow-sm shrink-0">
                  <FontAwesomeIcon icon={faQrcode} />
                </div>
                <span>
                  방을 만들고 <b>QR코드</b>나 <b>링크</b>를 친구에게 공유하세요.
                </span>
              </div>
              <div className="flex items-center gap-3 text-sm text-gray-600">
                <div className="w-8 h-8 rounded-lg bg-white flex items-center justify-center text-blue-500 shadow-sm shrink-0">
                  <FontAwesomeIcon icon={faUsers} />
                </div>
                <span>
                  대기방에 <b>멤버가 모두 모이면</b> 게임이 시작됩니다!
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* 하단 버튼 */}
        <div className="p-3 border-t border-gray-100 bg-white z-10">
          <button
            onClick={() => setShowHelp(false)}
            className="w-full py-3 bg-gray-900 text-white rounded-xl font-bold text-sm hover:bg-gray-800 transition-colors"
          >
            알았어요!
          </button>
        </div>
      </div>
    </div>
  );
}
