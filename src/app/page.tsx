'use client';
import Image from 'next/image';
import Link from 'next/link';
import Header from './components/atoms/Header';
import TaskLetter from './components/molecules/TaskLetter';
import { TaskLetterType } from './utils/types';
import ServiceTypeButtons from './components/molecules/ServiceTypeButtons';
import { useEffect, useState } from 'react';

const TASK_LIST: TaskLetterType[] = [
  {
    taskName: 'Foco fundido',
    taskLocation: 'Edifio A, salon 3',
    taskType: 'Electricidad',
    taskState: 'Abierto',
  },
  {
    taskName: 'Fuga en el baño',
    taskLocation: 'Edificio G, planta baja',
    taskType: 'Plomeria',
    taskState: 'Cerrado',
  },
  {
    taskName: 'Polvo en salon',
    taskLocation: 'Edificio B, salon 2',
    taskType: 'Limpieza',
    taskState: 'Cerrado',
  },
  {
    taskName: 'Contacto quemado',
    taskLocation: 'Edificio A, salon 1',
    taskType: 'Electricidad',
    taskState: 'Abierto',
  },
  {
    taskName: 'Mancha en barda',
    taskLocation: 'Puerta A',
    taskType: 'General',
    taskState: 'Cerrado',
  },
  {
    taskName: 'Rama rota',
    taskLocation: 'Costado de cafeteria',
    taskType: 'Jardineria',
    taskState: 'Abierto',
  },
  {
    taskName: 'Cable roto',
    taskLocation: 'Cafeteria',
    taskType: 'Electricidad',
    taskState: 'Cerrado',
  },
];
export type Filter = 'Todos' | 'Abiertos' | 'Cerrados';
const FILTER_OPTIONS: Filter[] = ['Todos', 'Abiertos', 'Cerrados'];

export default function Home() {
  const [selectedFilter, setSelectedFilter] = useState<string | undefined>(
    'Todos',
  );
  const [filterTaskList, setFilterTaskList] = useState(TASK_LIST);
  const [isOpenTask, setIsOpenTask] = useState<TaskLetterType | undefined>();

  useEffect(() => {
    console.log('esta abierto', isOpenTask);
  }, [isOpenTask]);

  useEffect(() => {
    if (selectedFilter === 'Cerrados' || selectedFilter === 'Abiertos') {
      setFilterTaskList(
        TASK_LIST.filter(
          (option) => option.taskState === selectedFilter?.slice(0, -1),
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
          optionsContainerStyles='sm:justify-end'
          buttonClassName='shadow-xl/20 py-2 sm:w-auto rounded-xl shadow-black-500'
        />
        <div className='mt-2 flex w-full flex-col gap-4'>
          {filterTaskList.map((item, index) => (
            <TaskLetter
              key={item.taskName + index}
              taskname={item.taskName}
              taskLocation={item.taskLocation}
              taskType={item.taskType}
              taskState={item.taskState}
              onClick={() => setIsOpenTask(item)}
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
        <div
          className={`${isOpenTask ? 'flex' : 'hidden'} fixed top-0 right-0 left-0 z-50 h-[calc(100%)] max-h-full w-full items-center justify-center overflow-x-hidden overflow-y-auto bg-gray-800/50 md:inset-0`}
        >
          <div className='relative max-h-full w-full max-w-2xl p-4'>
            <div className='relative rounded-lg bg-white shadow-sm dark:bg-gray-700'>
              <div className='flex items-center justify-between rounded-t border-b border-gray-200 p-4 md:p-5 dark:border-gray-600'>
                <h3 className='text-xl font-semibold text-gray-900 dark:text-white'>
                  {isOpenTask?.taskName}
                </h3>
                <button
                  onClick={() => setIsOpenTask(undefined)}
                  type='button'
                  className='ms-auto inline-flex h-8 w-8 items-center justify-center rounded-lg bg-transparent text-sm text-gray-400 hover:bg-gray-200 hover:text-gray-900 dark:hover:bg-gray-600 dark:hover:text-white'
                >
                  <Image
                    loading='lazy'
                    aria-hidden
                    src='/close.svg'
                    alt='close icon'
                    width={22}
                    height={22}
                    className='imagePlus'
                  />
                </button>
              </div>

              <div className='space-y-4 p-4 md:p-5'>
                <p className='text-base leading-relaxed text-gray-500 dark:text-gray-400'>
                  With less than a month to go before the European Union enacts
                  new consumer privacy laws for its citizens, companies around
                  the world are updating their terms of service agreements to
                  comply.
                </p>
                <p className='text-base leading-relaxed text-gray-500 dark:text-gray-400'>
                  The European Union’s General Data Protection Regulation
                  (G.D.P.R.) goes into effect on May 25 and is meant to ensure a
                  common set of data rights in the European Union. It requires
                  organizations to notify users as soon as possible of high-risk
                  data breaches that could personally affect them.
                </p>
              </div>
              <div className='flex flex-col gap-4 p-4 sm:flex-row'>
                <Image
                  loading='lazy'
                  aria-hidden
                  src='https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjSLL75PXIzgq9B8PPKTZNwoPl8jPuClylBFVJzxdUP0xoHwQAIdZ4l7xwES44SEK2sz_5J-SPeHHO8A_Vm7LCpiaSa0vtS55wl1enj1J7_4Jrc5js3zvjv_FhmMm1HaY5zLHtRyTz_LBA/s1600/Instalaciones-electricas-residenciales-Contacto-quemado.jpg'
                  alt='image'
                  width={220}
                  height={100}
                  className='imagePlus'
                />
                <div className='flex flex-col gap-2'>
                  <p>
                    Ubicacion:{' '}
                    <span className='text-base leading-relaxed text-gray-500 dark:text-gray-400'>
                      {isOpenTask?.taskLocation}
                    </span>
                  </p>
                  <p>
                    Estado:{' '}
                    <span
                      className={`${isOpenTask?.taskState === 'Abierto' ? 'bg-green-500' : 'bg-red-500'} rounded-sm p-1 text-base leading-relaxed text-gray-800 dark:text-gray-600`}
                    >
                      {isOpenTask?.taskState}
                    </span>
                  </p>
                  <p>
                    Reporto:{' '}
                    <span className='text-base leading-relaxed text-gray-500 capitalize dark:text-gray-400'>
                      alguien
                    </span>
                  </p>
                </div>
              </div>

              {/* 
              <div className='flex items-center rounded-b border-t border-gray-200 p-4 md:p-5 dark:border-gray-600'>
                <button
                  onClick={() => setIsOpenTask(undefined)}
                  type='button'
                  className='rounded-lg bg-blue-700 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 focus:outline-none dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800'
                >
                  I accept
                </button>
               <button
                data-modal-hide='default-modal'
                type='button'
                className='ms-3 rounded-lg border border-gray-200 bg-white px-5 py-2.5 text-sm font-medium text-gray-900 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100 focus:outline-none dark:border-gray-600 dark:bg-gray-800 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white dark:focus:ring-gray-700'
              >
                Decline
              </button>
              </div>*/}
            </div>
          </div>
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
