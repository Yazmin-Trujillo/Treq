'use client';
import { Size } from '@/app/utils/types';

type Props = {
  text: string;
  textSize?: Size;
};

export default function Header({ text, textSize }: Props) {
  return (
    <div
      className={`${
        textSize === 'small'
          ? 'text-xl sm:text-2xl lg:text-3xl'
          : textSize === 'medium'
            ? 'text-2xl sm:text-3xl lg:text-4xl'
            : textSize === 'big'
              ? 'text-3xl sm:text-4xl lg:text-5xl'
              : 'text-lg sm:text-xl lg:text-2xl'
      } font-medium capitalize`}
    >
      {text}
    </div>
  );
}
