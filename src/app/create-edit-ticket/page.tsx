'use client';
import Form from 'next/form';
import Header from '../components/atoms/Header';
import Button from '../components/atoms/Button';
import { useState } from 'react';
import Input from '../components/atoms/Input';
import ServiceTypeButtons from '../components/molecules/ServiceTypeButtons';
import { Services } from '../utils/types';

const SERVICES_TYPE: Services[] = [
  'Electricidad',
  'Plomeria',
  'Limpieza',
  'General',
  'Jardineria',
];

export default function CreateEditTicke() {
  const [selectedService] = useState<string | undefined>();

  const onSubmit = (formData: FormData) => {
    console.log('tipo de servicio seleccionado', selectedService);

    for (const pair of formData.entries()) {
      console.log(pair[0], pair[1]);
    }

    for (const value of formData.values()) {
      console.log(value);
    }

    console.log('creando tarea', formData.get('asunto'));
  };

  return (
    <div className='flex min-h-screen w-full max-w-[96rem] flex-col items-center justify-center gap-8 p-4'>
      <Header text='Nuevo Ticket' textSize='medium' />
      <Form
        action={onSubmit}
        className='flex max-w-md flex-1 flex-col items-center gap-4'
      >
        <div className='w-full'>
          <Input label='Asunto' name='asunto' required />
        </div>
        <ServiceTypeButtons
          options={SERVICES_TYPE}
          label='Tipo de servicio'
          buttonClassName='py-2'
        />
        <div className='w-full'>
          <div className='text-xl sm:text-2xl md:text-3xl'>Descripcion</div>
          <textarea
            name='descripcion'
            rows={4}
            className='w-full rounded-lg border border-stone-400 px-4 py-2 hover:border-sky-400 focus:shadow-[0_0_0_0.2rem_rgb(165,243,252)] focus:outline-0 focus:outline-offset-0 focus:outline-sky-200'
          ></textarea>
        </div>
        <div className='w-full'>
          <Input label='Area/Ubicacion' name='area' />
        </div>
        <div className='w-full'>
          <div className='text-xl sm:text-2xl md:text-3xl'>Insumos</div>
          <textarea
            name='insumos'
            rows={4}
            className='w-full rounded-lg border border-stone-400 px-4 py-2 hover:border-sky-400 focus:shadow-[0_0_0_0.2rem_rgb(165,243,252)] focus:outline-0 focus:outline-offset-0 focus:outline-sky-200'
          ></textarea>
        </div>
        <div className='w-full'>
          <Input
            label='Imagenes/Fotos'
            name='imagenes'
            required
            defaultValue='como se manejaran las imagenes?'
          />
        </div>
        <Button text='Crear' buttonType='submit' buttonClassName='mt-6' />
      </Form>
    </div>
  );
}
