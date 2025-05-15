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
      <div className="flex flex-col items-center gap-2">
        <button onClick={() => setSelected('upside')}>
          <PlayOption img="/back-hand.png" alt="위" selected={selected === 'upside'}></PlayOption>
        </button>
        <p>위</p>
      </div>
      <div className="flex flex-col items-center gap-2">
        <button onClick={() => setSelected('downside')}>
          <PlayOption img="/paper.png" alt="아래" selected={selected === 'downside'}></PlayOption>
        </button>
        <p>아래</p>
      </div>
    </div>
  );
}
