'use client';
import { useEffect, useState } from 'react';

type Size = 'small' | 'medium' | 'big';
type Props = {
  text: string;
  textSize?: Size;
};

export enum CosasEnum {
  COSAS = 1,
  OTRAS_COSAS,
  SIGUIENTE,
}

export default function Header({ text, textSize }: Props) {
  const [size, setSize] = useState('text-xl');

  useEffect(() => {
    switch (textSize) {
      case 'small':
        setSize('text-xl');
        break;
      case 'medium':
        setSize('text-2xl');
        break;
      case 'big':
        setSize('text-3xl');
        break;
      default:
        setSize('text-xl');
    }
  }, [textSize]);

  return <div className={`${size} font-medium`}>{text}</div>;
}
