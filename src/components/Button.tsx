export default function Button({
  color,
  textColor = 'white',
  content,
  onClick,
  children,
}: ButtonProps) {
  return (
    <button
      className={
        'flex w-[calc(100%-40px)] h-12 items-center justify-center rounded-[10px] mx-5 text-normal font-semibold'
      }
      style={{ backgroundColor: color, color: textColor }}
      onClick={onClick}
    >
      {content}
      {children}
    </button>
  );
}
