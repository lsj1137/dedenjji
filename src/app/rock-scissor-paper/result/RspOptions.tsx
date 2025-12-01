import PlayOption from '@/components/PlayOption';

export default function RspOptions({
  selected,
  setSelected,
}: {
  selected: string;
  setSelected: (option: string) => void;
}) {
  return (
    <div className="flex flex-col gap-5 items-center">
      <button className="max-w-[150px]" onClick={() => setSelected('rock')}>
        <PlayOption img="/rock.png" alt="바위" selected={selected === 'rock'} bgColor=' bg-menuBlue'></PlayOption>
      </button>
      <div className="flex gap-5">
        <button onClick={() => setSelected('scissors')}>
          <PlayOption img="/scissor.png" alt="가위" selected={selected === 'scissors'} bgColor=' bg-menuBlue'></PlayOption>
        </button>
        <button onClick={() => setSelected('paper')}>
          <PlayOption img="/paper.png" alt="보" selected={selected === 'paper'} bgColor=' bg-menuBlue'></PlayOption>
        </button>
      </div>
    </div>
  );
}
