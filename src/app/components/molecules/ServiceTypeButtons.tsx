import { Services, ServiceType } from '@/app/utils/types';
import { useEffect, useState } from 'react';

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

type Props = { selectedServices: (service?: Services) => void };

export default function ServiceTypeButtons({ selectedServices }: Props) {
  const [selectedType, setSelectedType] = useState<ServiceType>();

  useEffect(() => {
    selectedServices(selectedType?.type);
  }, [selectedType, selectedServices]);

  return (
    <div className='flex flex-col gap-2'>
      <div className='md:text-3x1 text-xl sm:text-2xl'>Tipo de servicio</div>
      <div className='grid grid-cols-3 gap-4'>
        {SERVICE_TYPE.map((item) => (
          <div
            key={item.type}
            onClick={() => setSelectedType(item)}
            className={`flex justify-center overflow-hidden rounded-full border px-2 py-0 text-base sm:text-lg md:text-xl ${
              item.type === selectedType?.type
                ? `bg-[${selectedType?.color}]`
                : 'bg-[#F1EDED]'
            }`}
          >
            <p className='truncate'>{item.type}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
