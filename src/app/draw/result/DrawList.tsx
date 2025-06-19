'use client';
import Card from '@/components/Card';
import { useEffect, useRef, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faRefresh } from '@fortawesome/free-solid-svg-icons';
import Button from '@/components/Button';

export default function DrawList({ total, win }: DrawListProps) {
  const [cards, setCards] = useState<DrawItem[]>([]);
  const [selected, setSelected] = useState<DrawItem>();
  const [remainingWinner, setRemainingWinner] = useState<number>(win);

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
          className="absolute transition-all duration-300 ease-in-out"
          key={card.num}
          style={{
            left: `calc(50% + ${-400 / 2 + card.x * width}px)`,
            top: `${178 + card.y * height.current}px`,
            rotate: `${card.angle}deg`,
            zIndex: card !== selected ? index : 100,
          }}
          onClick={() => {
            card.x = 0.5;
            card.y = 0.5;
            card.angle = 0;
            setSelected(card);
            if (card.isWinner) setRemainingWinner(prev => prev - 1);
            setTimeout(() => {
              setCards(prev => prev.filter(c => c.num !== card.num));
            }, 3000);
          }}
        >
          {card !== selected ? (
            <Card color={card.color} borderColor={card.color}></Card>
          ) : (
            <Card color="white" borderColor={card.color}>
              <div className="text-black w-full h-full flex items-center justify-center text-header font-semibold z-50">
                {selected?.isWinner ? '당첨!' : `${(selected?.num ?? 0) + 1}`}
              </div>
            </Card>
          )}
        </button>
      ))}

      {cards.length > 0 ? (
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2">
          <button
            className="flex items-center gap-2"
            onClick={() => setCards(mixCards(cards.length, remainingWinner, cards))}
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

function getRandomHexColor(): string {
  const randomColor = Math.floor(Math.random() * 16777215).toString(16);
  return `#${randomColor.padStart(6, '0')}`;
}

function mixCards(total: number, win: number, cards?: DrawItem[]): DrawItem[] {
  const arr: number[] = Array.from(new Array(total), (_, i) => i);
  arr.sort(() => Math.random() - 0.5);
  return Array.from(cards || new Array(total), (_, i) => {
    return {
      x: Math.random(),
      y: Math.random(),
      color: getRandomHexColor(),
      num: cards ? cards[i].num : arr[i],
      angle: Math.random() * 360,
      isWinner: cards ? cards[i].isWinner : arr[i] >= total - win,
    };
  });
}
