import PlayOption from '@/components/PlayOption';

export default function RspOptions({
  selected,
  setSelected,
}: {
  selected: string;
  setSelected: (option: string) => void;
}) {
  return (
    <div className="flex gap-5">
      <div className="flex flex-col items-center">
        <button onClick={() => setSelected('위')}>
          <PlayOption img="/back-hand.png" alt="위" selected={selected === '위'}></PlayOption>
        </button>
        <p>위</p>
      </div>
      <div className="flex flex-col items-center">
        <button onClick={() => setSelected('아래')}>
          <PlayOption img="/paper.png" alt="아래" selected={selected === '아래'}></PlayOption>
        </button>
        <p>아래</p>
      </div>
    </div>
  );
}
