'use client';
import Button from '@/components/Button';
import Header from '@/components/Header';

export default function Auto() {
  return (
    <div>
      <Header title="자동" goHome={false} canSet={true}></Header>
      <div className="my-20"></div>
      <Button color="var(--color-menuRed)" content="나누기" onClick={() => {}}></Button>
    </div>
  );
}
