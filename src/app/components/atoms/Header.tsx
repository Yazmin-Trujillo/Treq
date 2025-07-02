'use client';
import { Size } from '@/app/utils/types';
import { useEffect, useState } from 'react';

type Props = {
  text: string;
  textSize?: Size;
};

export default function Header({ text, textSize }: Props) {
  const [size, setSize] = useState('');

  useEffect(() => {
    switch (textSize) {
      case 'small':
        setSize('text-2xl sm:text-3x1 lg:text-4xl');
        break;
      case 'medium':
        setSize('text-3xl sm:text-4x1 lg:text-5xl');
        break;
      case 'big':
        setSize('text-4xl sm:text-5x1 lg:text-6xl');
        break;
      default:
        setSize('text-xl sm:text-2x1 lg:text-3xl');
    }
  }, [textSize]);

  return <div className={`${size} font-medium`}>{text}</div>;
}
