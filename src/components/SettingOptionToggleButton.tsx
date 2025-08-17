export default function SettingOptionToggleButton({
  title,
  isActive,
  setIsActive,
  activeColor,
}: {
  title: string;
  isActive: boolean;
  setIsActive: (isActive: boolean) => void;
  activeColor: string;
}) {
  return (
    <div className="my-20 flex justify-between items-center mx-4 font-semibold">
      <p>{title}</p>
      <div
        className={`w-[84px] h-[42px] relative rounded-full`}
        style={{
          background: `${isActive ? activeColor : '#BCBCBC'}`,
          boxShadow: 'inset 0px 2px 4px 0px #00000050',
        }}
        onClick={() => setIsActive(!isActive)}
      >
        <div
          className={`w-[34px] h-[34px] rounded-full bg-white m-1 absolute transition-all duration-200 ease-in-out shadow-[0_2px_4px_#00000050] ${isActive ? 'right-0' : 'right-[42px]'}`}
        ></div>
      </div>
    </div>
  );
}
