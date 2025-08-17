'use client';
import Card from '@/components/Card';
import { useEffect, useRef, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faRefresh } from '@fortawesome/free-solid-svg-icons';
import Button from '@/components/Button';
import { mixCards } from '@/utils/draw';
import { useDrawSettingStore } from '@/store/useStore';

export default function DrawList({ total, win }: DrawListProps) {
  const [cards, setCards] = useState<DrawItem[]>([]);
  const [selected, setSelected] = useState<DrawItem>();
  const [remainingWinner, setRemainingWinner] = useState<number>(win);
  const timerRef = useRef<NodeJS.Timeout>(null);
  const { showIndex } = useDrawSettingStore();

  const width = 200;
  const height = useRef(400);

  useEffect(() => {
    const newCards = mixCards(total, remainingWinner);
    setCards(newCards);
    height.current = (window.innerHeight - 178) / 2;
  }, [total]);

  return (
    <div className="flex ">
      {cards.map((card, index) => (
        <button
          className="w-50 absolute transition-all duration-300 ease-in-out"
          key={card.num}
          style={{
            left: `calc(50% + ${-400 / 2 + card.x * width}px)`,
            top: `${178 + card.y * height.current}px`,
            rotate: `${card.angle}deg`,
            zIndex: card !== selected ? index : 100,
          }}
          onClick={() => {
            if (timerRef.current) {
              clearTimeout(timerRef.current);
            }
            setCards(prev => prev.filter(c => c.num !== selected?.num));
            card.x = 0.5;
            card.y = 0.5;
            card.angle = 0;
            setSelected(card);
            if (card.isWinner) setRemainingWinner(prev => prev - 1);
            timerRef.current = setTimeout(() => {
              setCards(prev => prev.filter(c => c.num !== card.num));
            }, 3000);
          }}
        >
          {card !== selected ? (
            <Card color={card.color} borderColor={card.color}></Card>
          ) : (
            <Card color="white" borderColor={card.color}>
              <div className="text-black w-full h-full flex items-center justify-center text-header font-semibold z-50">
                {selected?.isWinner
                  ? '당첨' + (showIndex ? win - remainingWinner : '!')
                  : `${(selected?.num ?? 0) + 1}`}
              </div>
            </Card>
          )}
        </button>
      ))}

      {cards.length > 0 ? (
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2">
          <button
            className="flex items-center gap-2"
            onClick={() => {
              setCards(prev => prev.filter(c => c.num !== selected?.num));
              setCards(prev => mixCards(prev.length, remainingWinner, prev));
            }}
          >
            <p className="font-semibold text-header"> 섞기 </p>
            <FontAwesomeIcon icon={faRefresh} className="text-header"></FontAwesomeIcon>
          </button>
        </div>
      ) : (
        <div className="w-[400px] absolute bottom-8 left-1/2 -translate-x-1/2">
          <Button
            color="var(--color-menuYellow)"
            content="다시 처음부터 뽑기"
            textColor="black"
            onClick={() => {
              if (timerRef.current) {
                clearTimeout(timerRef.current);
              }
              setSelected(undefined);
              setRemainingWinner(win);
              const newCards = mixCards(total, win);
              setCards(newCards);
            }}
          ></Button>
        </div>
      )}
    </div>
  );
}
