import { Services, ServiceType } from '@/app/utils/types';
import { useEffect, useState } from 'react';
import ServiceTypeButton from '../atoms/ServiceTypeButton';

const SERVICE_TYPE: ServiceType[] = [
  {
    type: 'Electricidad',
    color: '#41C7F3',
  },
  {
    type: 'Plomeria',
    color: '#C6C0C0',
  },
  {
    type: 'Limpieza',
    color: '#EFFF88',
  },
  {
    type: 'General',
    color: '#FC7878',
  },
  { type: 'Jardineria', color: '#49E754' },
];

/*const SERVICE_TYPE_COLOR = [
  { electricidad: '#41C7F3' },
  { plomeria: '#C6C0C0' },
  { limpieza: '#EFFF88' },
  { general: '#FC7878' },
  { jardineria: '#49E754' },
];*/

type Props = {
  selectedServices: Services | undefined;
  setSelectedServices: (service?: Services) => void;
};

export default function ServiceTypeButtons({
  selectedServices,
  setSelectedServices,
}: Props) {
  const [selectedType, setSelectedType] = useState<Services | undefined>(
    selectedServices,
  );

  useEffect(() => {
    setSelectedServices(selectedType);
  }, [selectedType, setSelectedServices]);

  return (
    <div className='flex flex-col gap-2'>
      <div className='md:text-3x1 text-xl sm:text-2xl'>Tipo de servicio</div>
      <div className='grid grid-cols-3 gap-4'>
        {SERVICE_TYPE.map((item) => (
          <ServiceTypeButton
            key={item.type}
            taskType={item.type}
            selectedType={selectedType}
            setSelectedType={setSelectedType}
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
