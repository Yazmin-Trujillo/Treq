import { useEffect, useState } from 'react';
import ServiceTypeButton from '../atoms/ServiceTypeButton';
import { twMerge } from 'tailwind-merge';
import { Filter } from '@/app/page';
import { Services } from '@/app/utils/types';

type Props = {
  options: Filter[] | Services[];
  label?: string;
  selectedFilter?: Filter | Services;
  wrapperStyles?: string;
  optionsContainerStyles?: string;
  buttonClassName?: string;
  bgColorSelected?: string;
  setSelectedFilter?: (filter?: Filter | Services | undefined) => void;
};

export default function ServiceTypeButtons({
  options,
  label,
  selectedFilter,
  wrapperStyles,
  optionsContainerStyles,
  buttonClassName,
  bgColorSelected,
  setSelectedFilter,
}: Props) {
  const [selectedOption, setSelectedOption] = useState<
    Filter | Services | undefined
  >(selectedFilter);

  useEffect(() => {
    setSelectedFilter && selectedOption
      ? setSelectedFilter(selectedOption)
      : null;
  }, [selectedOption]);

  return (
    <div className={`flex w-full flex-col gap-2 ${wrapperStyles}`}>
      {label ? (
        <div className='text-xl sm:text-2xl md:text-3xl'>{label}</div>
      ) : null}
      <div
        className={twMerge(
          'flex w-full flex-wrap justify-between gap-2 sm:gap-4',
          optionsContainerStyles,
        )}
      >
        {options.map((item, index) => (
          <ServiceTypeButton
            key={index}
            taskType={item}
            selectedOption={selectedOption}
            setSelectedOption={setSelectedOption}
            buttonClassName={buttonClassName}
            bgColorSelected={bgColorSelected}
          />
          /*<div
            key={item.type}
            onClick={() => setSelectedType(item)}
            className={`flex justify-center overflow-hidden rounded-full border border-gray-300 px-2 py-1 text-xs font-bold sm:text-sm md:text-base ${
              item.type === selectedType?.type
                ? `${selectedType?.type?.toLocaleLowerCase()}`
                : 'bg-[#F1EDED]'
            }`}
          >
            <p className='truncate tracking-wider'>{item.type}</p>
          </div>*/
        ))}
      </div>
    </div>
  );
}
