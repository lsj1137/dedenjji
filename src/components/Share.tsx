import Button from './Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLink } from '@fortawesome/free-solid-svg-icons';
import Script from 'next/script';
import { useEffect, useState } from 'react';

type ShareProps = {
  shareUrl: string;
};

declare var QRCode: any;

export default function Share({ shareUrl }: ShareProps) {
  const [ready, setReady] = useState<boolean>(false);

  useEffect(() => {
    if (ready) {
      new QRCode(document.getElementById('qrcode'), {
        text: shareUrl,
      });
    }
  }, [ready, shareUrl]);

  return (
    <div className="absolute w-[400px] top-1/2 -translate-y-1/2 flex flex-col justify-center items-center">
      <Script
        src="/qrcode.min.js"
        strategy="afterInteractive"
        onLoad={() => setReady(true)}
      ></Script>
      <p className="text-normal my-4 font-semibold">참가자들을 방으로 초대하세요!</p>
      <div
        id="qrcode"
        className="flex justify-center items-center w-[200px] h-[200px] p-5 bg-white"
      ></div>
      <p className="my-4  font-semibold">또는</p>
      <Button
        onClick={() => {
          shareLink({ shareUrl });
        }}
        color="black"
      >
        <div className="flex items-center gap-2">
          <FontAwesomeIcon icon={faLink} />
          <span>링크 공유하기</span>
        </div>
      </Button>
    </div>
  );
}

async function shareLink({ shareUrl }: ShareProps) {
  try {
    await navigator.share({
      title: '우리들의 팀 나누기 방법 - 데덴찌',
      text: '지금 파티에 참여하세요!',
      url: shareUrl,
    });
  } catch (error) {
    console.error(error);
  }
}
