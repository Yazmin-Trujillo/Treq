'use client';
import { Services } from '@/app/utils/types';

type Props = {
  taskType: Services;
  selectedType?: Services;
  setSelectedType?: (service?: Services) => void;
  buttonClassName?: string;
};

export default function ServiceTypeButton({
  taskType,
  selectedType,
  setSelectedType,
}: Props) {
  //const [selectedType, setSelectedType] = useState<Services>();

  /* useEffect(() => {
    setSelectedServices(taskType);
  }, [selectedType, setSelectedServices]);*/

  return (
    <div
      onClick={setSelectedType ? () => setSelectedType(taskType) : () => {}}
      className={`flex w-full max-w-[10rem] justify-center overflow-hidden rounded-full border border-gray-300 px-2 py-1 text-xs font-bold sm:text-sm md:text-base ${
        setSelectedType
          ? taskType === selectedType
            ? `${taskType.toLocaleLowerCase()}`
            : 'bg-[#F1EDED]'
          : taskType.toLocaleLowerCase()
      }`}
    >
      <p className='truncate tracking-wider'>{taskType}</p>
    </div>
  );
}
