'use client';
import { Size } from '@/app/utils/types';
import { useEffect, useState } from 'react';

type Props = {
  text: string;
  textSize?: Size;
};

export default function Header({ text, textSize }: Props) {
  const [size, setSize] = useState(textSize);

  return (
    <div
      className={`${
        size === 'small'
          ? 'sm:text-2x1 text-xl lg:text-3xl'
          : size === 'medium'
            ? 'sm:text-3x1 text-2xl lg:text-4xl'
            : size === 'big'
              ? 'sm:text-4x1 text-3xl lg:text-5xl'
              : 'lg:text-2x1 text-lg sm:text-xl'
      } font-medium capitalize`}
    >
      {text}
    </div>
  );
}
