import Image from 'next/image';
import Link from 'next/link';
import Header from './components/atoms/Header';
import TaskLetter from './components/molecules/TaskLetter';
import { TaskLetterType } from './utils/types';

const TASK_LIST: TaskLetterType[] = [
  {
    taskName: 'Foco fundido',
    taskLocation: 'Edifio A, salon 3',
    taskType: 'Electricidad',
  },
  {
    taskName: 'Fuga en el baño',
    taskLocation: 'Edificio G, planta baja',
    taskType: 'Plomeria',
  },
  {
    taskName: 'Polvo en salon',
    taskLocation: 'Edificio B, salon 2',
    taskType: 'Limpieza',
  },
  {
    taskName: 'Contacto quemado',
    taskLocation: 'Edificio A, salon 1',
    taskType: 'Electricidad',
  },
  {
    taskName: 'Mancha en barda',
    taskLocation: 'Puerta A',
    taskType: 'General',
  },
  {
    taskName: 'Rama rota',
    taskLocation: 'Costado de cafeteria',
    taskType: 'Jardineria',
  },
  {
    taskName: 'Cable roto',
    taskLocation: 'Cafeteria',
    taskType: 'Electricidad',
  },
];

export default function Home() {
  return (
    <div className='flex min-h-screen w-full max-w-[96rem] flex-col items-center justify-items-center gap-16 p-8 pb-20 font-[family-name:var(--font-geist-sans)] sm:p-20'>
      <main className='flex w-full flex-1 flex-col items-center gap-[32px]'>
        <div className='flex w-full items-center justify-between'>
          <Header text='Tickets' textSize='medium' />
          <Link href='/create-edit-ticket'>
            <button className='rounded-full bg-[#6156FF] px-3 py-3 text-3xl leading-none font-medium text-white'>
              <Image
                aria-hidden
                src='/plus.svg'
                alt='plus icon'
                width={22}
                height={22}
                className='imagePlus'
              />
            </button>
          </Link>
        </div>
        <div className='w-full'>
          {TASK_LIST.map((item, index) => (
            <TaskLetter
              key={item.taskName + index}
              taskname={item.taskName}
              taskLocation={item.taskLocation}
              taskType={item.taskType}
            />
          ))}
        </div>
        <Link href='/login'>Login</Link>
      </main>
      {/*<footer className='flex w-full flex-wrap items-center justify-center gap-[24px]'>
        <a
          className='flex items-center gap-2 hover:underline hover:underline-offset-4'
          href='https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app'
          target='_blank'
          rel='noopener noreferrer'
        >
          <Image
            aria-hidden
            src='/file.svg'
            alt='File icon'
            width={16}
            height={16}
          />
          Learn
        </a>
      </footer>*/}
    </div>
  );
}
