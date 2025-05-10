import type { Metadata } from 'next';
import './styles/globals.css';

export const metadata: Metadata = {
  title: '데덴찌',
  description: '우리만의 팀 나누기 방식 / Korean-style team splitting',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="flex bg-bgGray w-dvw h-dvh font-pretendard justify-center items-center">
        <div className=" flex flex-col w-[400px] h-dvh">{children}</div>
      </body>
    </html>
  );
}
