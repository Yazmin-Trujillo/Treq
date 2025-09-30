import ServiceTypeButton from '../atoms/ServiceTypeButton';
import { twMerge } from 'tailwind-merge';
import { Services } from '@/app/utils/types';

type Props = {
  options: Services[] | string[];
  label?: string;
  opacity?: boolean;
  selectedFilter?: string;
  setSelectedFilter?: (filter?: string | undefined) => void;
  wrapperStyles?: string;
  optionsContainerStyles?: string;
  buttonClassName?: string;
  bgColorSelected?: string;
};

export default function ServiceTypeButtons({
  options,
  label,
  opacity,
  selectedFilter,
  wrapperStyles,
  optionsContainerStyles,
  buttonClassName,
  bgColorSelected,
  setSelectedFilter,
}: Props) {
  const BgColor = (type: string) => {
    if (type === 'Electricidad') {
      return 'bg-[#0ea5e9]';
    } else if (type === 'Plomeria') {
      return 'bg-[#757575]';
    } else if (type === 'Limpieza') {
      return 'bg-[#f97316]';
    } else if (type === 'General') {
      return 'bg-[#ef4444]';
    } else if (type === 'Jardineria') {
      return 'bg-[#22c55e]';
    } else {
      return undefined;
    }
  };

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
        {options.map((option, index) => (
          <ServiceTypeButton
            key={index}
            option={option}
            isOpacity={opacity}
            selectedOption={selectedFilter}
            setSelectedOption={setSelectedFilter}
            buttonClassName={buttonClassName}
            bgColor={BgColor(option)}
            bgColorSelected={bgColorSelected || BgColor(option)}
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
