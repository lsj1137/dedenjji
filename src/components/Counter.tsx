import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus, faMinus } from '@fortawesome/free-solid-svg-icons';

export default function Counter({ objectName, count, minimum = 0, onChange }: CounterProps) {
  return (
    <div className="flex w-full items-center font-semibold px-4">
      <div className="flex-1">{objectName}</div>
      <button
        className="w-8 h-8"
        onClick={() => {
          if (count > minimum) onChange(count - 1);
        }}
      >
        <FontAwesomeIcon icon={faMinus}></FontAwesomeIcon>
      </button>
      <input
        className="h-[42px] w-[8ch] text-center bg-white inset-2 rounded-[5px] px-4 inset-shadow-sm inset-shadow-gray-300"
        value={count}
        onChange={v => {
          if (Number.isNaN(Number(v.target.value))) return;
          onChange(Number(v.target.value));
        }}
        maxLength={3}
      ></input>
      <button className="w-8 h-8" onClick={() => onChange(count + 1)}>
        <FontAwesomeIcon icon={faPlus}></FontAwesomeIcon>
      </button>
    </div>
  );
}
