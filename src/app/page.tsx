import MainContent from '@/components/MainContent';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: '데덴찌',
  description:
    '자동 팀 나누기, 제비뽑기, 가위바위보, 데덴찌까지! 술래잡기부터 내기까지 모든 팀 구성을 한 번에 해결하세요.',
  keywords: ['팀 나누기', '데덴찌', '랜덤 팀', '제비뽑기', '가위바위보', '사다리타기'],
  openGraph: {
    title: '데덴찌 - 가장 쉬운 팀 나누기',
    description: '눈치 보지 말고 공정하게! 데덴찌로 3초 만에 팀을 나눠보세요.',
    url: 'https://dedenjji.3jun.store',
    siteName: '데덴찌',
    images: [
      {
        url: '/dedenjji-thumbnail.png',
        width: 1200,
        height: 630,
      },
    ],
    type: 'website',
  },
};

export default function Home() {
  return (
    <main className="h-full w-full">
      <MainContent />
    </main>
  );
}
