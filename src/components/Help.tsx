'use client';

import { faWandMagicSparkles, faFlag, faXmark } from '@fortawesome/free-solid-svg-icons';
import { faHandBackFist, faHandScissors, faHand } from '@fortawesome/free-regular-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Dispatch, SetStateAction } from 'react';

interface HelpProps {
  setShowHelp: Dispatch<SetStateAction<boolean>>;
}

export default function Help({ setShowHelp }: HelpProps) {
  // 메뉴별 도움말 데이터 (아이콘, 색상, 제목, 설명)
  const helpItems = [
    {
      title: '자동 (Auto Split)',
      description:
        '인원 수와 팀 개수만 입력하세요! 복잡한 계산 없이 랜덤하고 공평하게 팀을 나눠드립니다.',
      color: 'var(--color-menuRed)',
      icon: <FontAwesomeIcon icon={faWandMagicSparkles} size="lg" />,
    },
    {
      title: '제비뽑기 (Draw Lots)',
      description:
        '술래 잡기, 역할 정하기, 벌칙자 선정 등 운이 필요할 때! 뽑기의 스릴을 느껴보세요.',
      color: 'var(--color-menuYellow)',
      icon: <FontAwesomeIcon icon={faFlag} size="lg" />,
    },
    {
      title: '가위바위보 (Rock Paper Scissors)',
      description:
        '단체 승부가 필요할 때 사용하세요. 모두 함께 결과를 확인하고 승패를 빠르게 가를 수 있습니다.',
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
      description: '손바닥 뒤집기 한 번으로 우리만의 팀을 나눠보세요.',
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
      <div className="w-full max-w-[360px] bg-white rounded-2xl shadow-xl overflow-hidden flex flex-col max-h-[80vh]">
        {/* 헤더: 제목 및 닫기 버튼 */}
        <div className="flex justify-between items-center p-4 border-b border-gray-100 bg-gray-50">
          <h2 className="text-xl font-bold text-gray-800 font-schoolbell">How to use?</h2>
          <button
            onClick={() => setShowHelp(false)}
            className="w-8 h-8 flex items-center justify-center rounded-full hover:bg-gray-200 transition-colors text-gray-500"
          >
            <FontAwesomeIcon icon={faXmark} size="lg" />
          </button>
        </div>

        {/* 컨텐츠 리스트 */}
        <div className="overflow-y-auto p-2">
          {helpItems.map((item, index) => (
            <div
              key={index}
              className={`flex items-start gap-4 p-4 ${
                index !== helpItems.length - 1 ? 'border-b border-gray-100' : ''
              }`}
            >
              {/* 아이콘 영역 */}
              <div
                className="flex-shrink-0 w-12 h-12 flex items-center justify-center rounded-full bg-opacity-10"
                style={{
                  color: item.color,
                  backgroundColor: `${item.color}20`, // 색상에 투명도 20% 적용
                }}
              >
                {item.icon}
              </div>

              {/* 텍스트 영역 */}
              <div className="flex-1">
                <h3 className="font-bold text-gray-800 text-sm mb-1">{item.title}</h3>
                <p className="text-xs text-gray-500 leading-relaxed break-keep">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* 하단 닫기 버튼 (모바일 편의성) */}
        <div className="p-3 border-t border-gray-100">
          <button
            onClick={() => setShowHelp(false)}
            className="w-full py-3 bg-gray-900 text-white rounded-xl font-bold text-sm hover:bg-gray-800 transition-colors"
          >
            알겠습니다!
          </button>
        </div>
      </div>
    </div>
  );
}
