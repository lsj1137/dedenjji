import './styles/home.css';
import Menu from '@/components/Menu';

export default function Home() {
  return (
    <>
      <div className=" absolute top-3 left-[calc(50%+160px)] w-8 h-8 rounded-[16px] border-textGray border-[1px] text-textGray text-[20px] bg-white flex items-center justify-center">
        ?
      </div>
      <div className="font-schoolbell text-center mt-[90px] mb-[90px]">
        <p className="text-title">De Den JJi</p>
        <p className="text-description">Korean-style team splitting</p>
      </div>
      <Menu></Menu>
      <footer className=" absolute bottom-8 left-[50%] -translate-x-1/2 text-center text-textGray">
        <p>by Se Jun Lim</p>
        <p>lsj1137jsl@gmail.com</p>
      </footer>
    </>
  );
}
