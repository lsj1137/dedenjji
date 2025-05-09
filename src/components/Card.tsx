type CardProps = {
  color: string;
  children?: React.ReactNode;
};

export default function Card({ color, children }: CardProps) {
  return (
    <div
      className="h-50 w-50 rounded-2xl text-white p-4 shadow-md group "
      style={{ backgroundColor: color }}
    >
      {children}
    </div>
  );
}
