import Button from './Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLink } from '@fortawesome/free-solid-svg-icons';

type ShareProps = {
  shareUrl: string;
  qrImgUrl: string;
};

export default function Share({ shareUrl, qrImgUrl }: ShareProps) {
  return (
    <div className="flex flex-col justify-center items-center">
      <p>참가자들을 방으로 초대하세요!</p>
      <img alt="qr code" src={qrImgUrl} className="w-40 h-40"></img>
      <p className="my-4">또는</p>
      <Button onClick={() => {}} color="black">
        <div className="flex items-center gap-2">
          <FontAwesomeIcon icon={faLink} />
          <span>링크 공유하기</span>
        </div>
      </Button>
    </div>
  );
}
