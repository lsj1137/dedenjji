import Image from 'next/image';
export default function PlayOption({
  img,
  selected,
  alt,
  bgColor
}: {
  img: string;
  selected?: boolean;
  alt?: string;
  bgColor: string
}) {
  return (
    <div
      className={
        ' rounded-[15px] transition-all duration-300 ease-in-out' +
        (selected ? bgColor +' inset-shadow-sm/50' : ' bg-white')
      }
    >
      <Image src={img} alt={alt ?? ''} width={150} height={150}></Image>
    </div>
  );
}
