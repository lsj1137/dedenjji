import { TeamData } from '@/types/teamTypes';
import { useState } from 'react';
import Button from './Button';
import { useRouter } from 'next/navigation';

export default function SettingOptionDropdown({
  title,
  selected,
  setSelected,
  optionList,
}: {
  title: string;
  selected: TeamData;
  setSelected: (teamData: TeamData) => void;
  optionList: TeamData[];
}) {
  const [isOpen, setIsOpen] = useState(false);
  const router = useRouter();
  return (
    <div>
      <div className="my-20 flex justify-between items-center mx-4 font-semibold">
        <p>{title}</p>
        <div className="relative inline-block">
          <div className="relative cursor-pointer">
            <div
              className="h-[42px] flex justify-between items-center bg-white px-2.5 py-1.5 w-25 inset-shadow-sm inset-shadow-gray-300 rounded-[5px]"
              onClick={() => setIsOpen(prev => !prev)}
            >
              <span className="flex h-full items-center">{selected.teamTypeName}</span>
              <div
                className={`w-0 h-0 border-x-[6px] border-x-transparent border-t-[6px] border-t-[#333] rounded-[10px] transition-all duration-[200ms]  ease-in-out ${isOpen ? ' rotate-0' : ' rotate-90'}`}
              />
            </div>

            {isOpen && (
              <div className="absolute top-full left-0 right-0 bg-white rounded-b-[4px] shadow overflow-hidden max-h-[300]">
                {optionList.map(option => (
                  <span
                    key={option.teamType}
                    className=" h-[40px] flex items-center px-2.5 py-1.5 hover:bg-[#f2f2f2]"
                    onClick={() => {
                      setSelected(option);
                      setIsOpen(prev => !prev);
                    }}
                  >
                    {option.teamTypeName}
                  </span>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
      <Button
        color="var(--color-menuRed)"
        content="완료"
        onClick={() => {
          router.back();
        }}
      ></Button>
    </div>
  );
}
