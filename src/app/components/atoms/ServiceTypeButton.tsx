'use client';
import { Filter } from '@/app/page';
import { Services } from '@/app/utils/types';
import { twMerge } from 'tailwind-merge';

type Props = {
  taskType: Filter | Services;
  selectedOption?: string;
  setSelectedOption?: (option?: Filter | Services | undefined) => void;
  buttonClassName?: string;
  bgColorSelected?: string;
};

export default function ServiceTypeButton({
  taskType,
  selectedOption,
  setSelectedOption,
  buttonClassName,
  bgColorSelected,
}: Props) {
  return (
    <div
      onClick={setSelectedOption ? () => setSelectedOption(taskType) : () => {}}
      className={twMerge(
        'flex max-w-[10rem] min-w-[5rem] justify-center overflow-hidden rounded-full px-4 py-1 text-xs font-bold sm:w-[6rem] sm:w-[8rem] sm:text-base sm:text-sm',
        buttonClassName,
        setSelectedOption
          ? taskType === selectedOption && bgColorSelected
            ? `${bgColorSelected} text-white`
            : taskType === selectedOption
              ? `${taskType.toLocaleLowerCase()}`
              : `${taskType.toLocaleLowerCase()} opacity`
          : taskType.toLocaleLowerCase(),
      )}
    >
      <p className='truncate tracking-wider'>{taskType}</p>
    </div>
  );
}
