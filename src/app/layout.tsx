import type { Metadata, Viewport } from 'next';
import '@/styles/globals.css';

export const metadata: Metadata = {
  title: '데덴찌',
  description:
    '우리만의 팀 나누기 방식(Korean-style team splitting methods) - 자동 팀나누기(Auto Split), 제비뽑기(Draw Lots), 가위바위보(Rock Paper Scissors), 데덴찌(Dedenjji)',
  alternates: {
    canonical: 'https://dedenjji.3jun.store',
  },
  icons: {
    icon: '/favicon.ico',
  },
};

// 모바일 키보드나 주소창에 대응하기 위한 뷰포트 설정
export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
  // interactiveWidget: 'resizes-content', // 필요시 키보드 올라올 때 화면 조정 옵션
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full">
      <body className="flex bg-bgGray w-dvw h-dvh font-pretendard justify-center items-center overflow-hidden touch-none ">
        <div className="flex flex-col w-full max-w-[400px] h-full overflow-y-auto no-scrollbar relative">{children}</div>
        <div
          id="toast"
          className="absolute top-[50%] left-[50%] -translate-x-1/2 bg-white rounded-xl px-4 py-2 shadow-gray-950/20 shadow-xs opacity-0 transition-all duration-300 ease-in-out"
        ></div>
      </body>
    </html>
  );
}
