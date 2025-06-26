import Form from 'next/form';
import Image from 'next/image';
import Button from '../components/atoms/Button';

export default function Login() {
  return (
    <div className='flex h-screen w-full max-w-[96rem]'>
      <div className='hidden flex-1 items-center justify-center bg-[#E7E6F6] md:flex'>
        <div className='relative flex h-full w-1/2 items-center justify-center'>
          <Image src='/cucsh.svg' alt='Cucsh logo' fill />
        </div>
      </div>
      <div className='flex flex-1 items-center justify-center'>
        <div className='flex h-1/3 w-2/5 flex-col'>
          <div className='text-center text-xl font-medium'>Login</div>
          <Form action={'/'} className='flex flex-1 flex-col justify-around'>
            <input
              name='Nameeee'
              type='text'
              placeholder='Nombre'
              required
              className='rounded-lg border px-4 py-2'
            />
            <input
              type='password'
              placeholder='Contraseña'
              required
              className='rounded-lg border px-4 py-2'
            />
            <Button text='Submit' />
          </Form>
        </div>
      </div>
    </div>
  );
}
