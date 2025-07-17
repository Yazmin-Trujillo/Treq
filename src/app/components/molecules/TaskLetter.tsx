import { Services } from '@/app/utils/types';
import Header from '../atoms/Header';
import ServiceTypeButton from '../atoms/ServiceTypeButton';

type Props = {
  taskname: string;
  taskLocation: string;
  taskType: Services;
  buttonClassName?: string;
};

export default function TaskLetter({
  taskname,
  taskLocation,
  taskType,
}: Props) {
  return (
    <div className='flex w-full border-t-2 border-t-gray-500 py-2'>
      <div className='flex-1'>
        <Header text={`${taskname}`} />
        <div className='capitalize'>{taskLocation}</div>
      </div>
      <div className='flex w-1/3 items-center justify-center'>
        <ServiceTypeButton taskType={taskType} />
      </div>
    </div>
  );
}
