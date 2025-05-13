import '@fortawesome/fontawesome-svg-core/styles.css';
import { config } from '@fortawesome/fontawesome-svg-core';
import Card from './Card';
import { ReactElement } from 'react';
config.autoAddCss = false; // 자동으로 CSS를 추가하지 않도록 설정

type OptionProps = {
  color: string;
  title?: string;
  content?: string;
  icon?: ReactElement;
};

export default function Option({ color, title, content, icon }: OptionProps) {
  return (
    <Card color={color}>
      <div
        className={
          'opacity-100 h-full group-hover:opacity-0 transition-all duration-300 ease-in-out'
        }
      >
        <h1 className="text-header font-extrabold">{title}</h1>
        <div className="h-4"></div>
        <div className="w-full translate-y-1/4 text-center">{icon}</div>
      </div>
      <div className="absolute inset-0 mt-4 mx-4 opacity-0 group-hover:opacity-100 transition-all duration-300 ease-in-out">
        <p className="text-normal font-semibold">{content}</p>
      </div>
    </Card>
  );
}
