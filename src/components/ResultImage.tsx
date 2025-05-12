import positive from '../../public/positive.png';
import negative from '../../public/negative.png';
import Image from 'next/image';

export default function ResultImage({ isPositive, icon }: { isPositive: boolean; icon: string }) {
  return (
    <div className=" relative flex w-full px-5 h-[164px] items-center justify-center">
      <Image
        src={isPositive ? positive : negative}
        alt="result image"
        fill={true}
        style={{ objectFit: 'cover' }}
      ></Image>
      <p className="text-8xl z-10">{icon}</p>
    </div>
  );
}
