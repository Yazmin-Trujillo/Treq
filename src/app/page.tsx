'use client';
import Image from 'next/image';
import Link from 'next/link';
import Header from './components/atoms/Header';
import TaskLetter from './components/molecules/TaskLetter';
import { Services, TaskLetterType } from './utils/types';
import ServiceTypeButtons from './components/molecules/ServiceTypeButtons';
import { useEffect, useState } from 'react';

const TASK_LIST: TaskLetterType[] = [
  {
    taskName: 'Foco fundido',
    taskLocation: 'Edifio A, salon 3',
    taskType: 'Electricidad',
    state: 'Abierto',
  },
  {
    taskName: 'Fuga en el baño',
    taskLocation: 'Edificio G, planta baja',
    taskType: 'Plomeria',
    state: 'Cerrado',
  },
  {
    taskName: 'Polvo en salon',
    taskLocation: 'Edificio B, salon 2',
    taskType: 'Limpieza',
    state: 'Cerrado',
  },
  {
    taskName: 'Contacto quemado',
    taskLocation: 'Edificio A, salon 1',
    taskType: 'Electricidad',
    state: 'Abierto',
  },
  {
    taskName: 'Mancha en barda',
    taskLocation: 'Puerta A',
    taskType: 'General',
    state: 'Cerrado',
  },
  {
    taskName: 'Rama rota',
    taskLocation: 'Costado de cafeteria',
    taskType: 'Jardineria',
    state: 'Abierto',
  },
  {
    taskName: 'Cable roto',
    taskLocation: 'Cafeteria',
    taskType: 'Electricidad',
    state: 'Cerrado',
  },
];
export type Filter = 'Todos' | 'Abiertos' | 'Cerrados';
const FILTER_OPTIONS: Filter[] = ['Todos', 'Abiertos', 'Cerrados'];

export default function Home() {
  const [selectedFilter, setSelectedFilter] = useState<
    Filter | undefined | Services
  >('Todos');
  const [filterTaskList, setFilterTaskList] = useState(TASK_LIST);

  useEffect(() => {
    if (selectedFilter === 'Cerrados' || selectedFilter === 'Abiertos') {
      setFilterTaskList(
        TASK_LIST.filter(
          (option) => option.state === selectedFilter?.slice(0, -1),
        ),
      );
    } else {
      setFilterTaskList(TASK_LIST);
    }
  }, [selectedFilter]);

  return (
    <div className='flex min-h-screen w-full max-w-[96rem] flex-col items-center justify-items-center gap-16 p-8 pb-20 font-[family-name:var(--font-geist-sans)] sm:p-20'>
      <main className='flex w-full flex-1 flex-col items-center gap-2 sm:gap-[32px]'>
        <div className='flex w-full items-center justify-center sm:justify-between'>
          <Header text='Tickets' textSize='medium' />
          <div className='hidden sm:flex'>
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
        </div>
        <ServiceTypeButtons
          options={FILTER_OPTIONS}
          selectedFilter={selectedFilter}
          setSelectedFilter={setSelectedFilter}
          bgColorSelected='bg-[#0ea5e9]'
          optionsContainerStyles='sm:justify-end'
          buttonClassName='bg-[#DBDBDC] shadow-xl/20 py-2 sm:w-auto rounded-xl shadow-black-500'
        />
        <div className='w-full'>
          {filterTaskList.map((item, index) => (
            <TaskLetter
              key={item.taskName + index}
              taskname={item.taskName}
              taskLocation={item.taskLocation}
              taskType={item.taskType}
            />
          ))}
        </div>

        <div className='flex w-full items-center justify-end sm:hidden'>
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
        {/* <Link href='/login'>Login</Link>*/}
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
