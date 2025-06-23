export default function Card({ color, borderColor, children }: CardProps) {
  return (
    <div
      className="w-full aspect-square rounded-2xl text-white p-4 shadow-md group "
      style={{
        backgroundColor: color,
        borderColor: borderColor,
        border: `3px solid ${borderColor || color}`,
      }}
    >
      {children}
    </div>
  );
}
