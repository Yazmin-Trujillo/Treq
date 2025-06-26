import Form from 'next/form';
import Header from '../components/atoms/Header';
import Button from '../components/atoms/Button';

export default function CreateEditTicke() {
  return (
    <div className='flex min-h-screen w-full max-w-[96rem] flex-col items-center justify-center bg-yellow-200'>
      <Header text='Nuevo Ticket' textSize='big' />

      <Form
        action={'/'}
        className='flex w-md flex-1 flex-col items-center justify-center bg-pink-200'
      >
        <div>
          <div className='text-2xl'>Asunto</div>
          <input
            name='asunto'
            type='text'
            required
            className='rounded-lg border px-4 py-2'
          />
        </div>
        <input
          type='password'
          placeholder='Contraseña'
          required
          className='rounded-lg border px-4 py-2'
        />
        <Button text='Submit' />
      </Form>
    </div>
  );
}
