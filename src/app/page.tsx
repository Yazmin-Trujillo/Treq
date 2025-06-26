import Image from 'next/image';
import Link from 'next/link';
import Header from './components/atoms/Header';
export default function Home() {
  return (
    <div className='flex min-h-screen w-full max-w-[96rem] flex-col items-center justify-items-center gap-16 bg-blue-200 p-8 pb-20 font-[family-name:var(--font-geist-sans)] sm:p-20'>
      <main className='flex w-full flex-1 flex-col items-center gap-[32px]'>
        <div className='flex w-full items-center justify-between bg-yellow-200'>
          <Header text='Tickets' textSize='big' />
          <Link href='/create-edit-ticket'>
            <button className='rounded-full bg-[#6156FF] px-3 py-3 text-3xl leading-none font-medium text-white'>
              <Image
                aria-hidden
                src='/plus.svg'
                alt='plus icon'
                width={22}
                height={22}
              />
            </button>
          </Link>
        </div>
        <Link href='/login'>Login</Link>
      </main>
      <footer className='flex w-full flex-wrap items-center justify-center gap-[24px]'>
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
      </footer>
    </div>
  );
}
