import { Services } from '@/app/utils/types';
import Header from '../atoms/Header';
import ServiceTypeButton from '../atoms/ServiceTypeButton';
import { ColorServices } from '@/app/utils/colors';

type Props = {
  taskname: string;
  taskLocation: string;
  taskType: Services;
  taskState: 'Abierto' | 'Cerrado';
  buttonClassName?: string;
  onClick: () => void;
};

export default function TaskLetter({
  taskname,
  taskLocation,
  taskType,
  taskState,
  onClick,
}: Props) {
  return (
    <div>
      <div onClick={onClick} className='flex w-full bg-[#F8F5EB] py-2'>
        <div className='flex-1'>
          <div className='flex items-center gap-2 rounded'>
            <div
              className={`h-2 w-2 rounded-full ${taskState === 'Abierto' ? 'bg-green-500' : 'bg-red-500'}`}
            ></div>
            <Header text={`${taskname}`} />
          </div>
          <div className='ml-4 text-base leading-relaxed text-gray-500 capitalize dark:text-gray-400'>
            {taskLocation}
          </div>
        </div>
        <div className='flex w-1/3 min-w-[5rem] items-center justify-center'>
          <ServiceTypeButton
            option={taskType}
            bgColor={ColorServices[taskType]}
          />
        </div>
      </div>
    </div>
  );
}
