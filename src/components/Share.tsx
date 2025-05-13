import Button from './Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLink } from '@fortawesome/free-solid-svg-icons';
import { useQRCode } from 'next-qrcode';

type ShareProps = {
  shareUrl: string;
};

export default function Share({ shareUrl }: ShareProps) {
  const { Image } = useQRCode();

  return (
    <div className="absolute w-[400px] top-1/2 -translate-y-1/2 flex flex-col justify-center items-center">
      <p className="text-normal my-4 font-semibold">참가자들을 방으로 초대하세요!</p>
      {shareUrl && (
        <Image
          text={shareUrl}
          options={{
            errorCorrectionLevel: 'M',
            margin: 5,
            scale: 4,
            width: 200,
            color: {
              dark: '#000000',
              light: '#ffffff',
            },
          }}
        />
      )}
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
