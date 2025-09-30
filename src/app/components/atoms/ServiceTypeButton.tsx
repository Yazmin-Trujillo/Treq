'use client';
import { twMerge } from 'tailwind-merge';

type Props = {
  option: string;
  selectedOption?: string;
  setSelectedOption?: (option?: string | undefined) => void;
  buttonClassName?: string;
  bgColor?: string;
  bgColorSelected?: string;
  isOpacity?: boolean;
};

export default function ServiceTypeButton({
  option,
  selectedOption,
  setSelectedOption,
  buttonClassName,
  bgColor,
  bgColorSelected,
  isOpacity,
}: Props) {
  return (
    <div
      onClick={setSelectedOption ? () => setSelectedOption(option) : () => {}}
      className={twMerge(
        'flex max-w-[10rem] min-w-[5rem] justify-center overflow-hidden rounded-full px-4 py-1 text-xs font-bold sm:w-[6rem] sm:w-[8rem] sm:text-base sm:text-sm',
        buttonClassName,
        isOpacity ? 'opacity-50' : null,
        selectedOption === option
          ? bgColorSelected
            ? `${bgColorSelected} opacity-100`
            : 'bg-[#7DB5FD] text-gray-800'
          : (bgColor ?? 'bg-[#4F87F2] text-white'),
      )}
    >
      <p className='truncate tracking-wider'>{option}</p>
    </div>
  );
}
