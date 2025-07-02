'use client';
import Form from 'next/form';
import Header from '../components/atoms/Header';
import Button from '../components/atoms/Button';
import { useEffect, useState } from 'react';
import Input from '../components/atoms/Input';
import ServiceTypeButtons from '../components/molecules/ServiceTypeButtons';
import { Services } from '../utils/types';

const SERVICE_TYPE = [
  {
    type: 'Electricidad',
    color: '#41C7F3',
  },
  {
    type: 'Plomeria',
    color: '#C6C0C0',
  },
  {
    type: 'Limpieza',
    color: '#EFFF88',
  },
  {
    type: 'General',
    color: '#FC7878',
  },
  { type: 'Jardineria', color: '#49E754' },
];

const SERVICE_TYPE_COLOR = [
  { electricidad: '#41C7F3' },
  { plomeria: '#C6C0C0' },
  { limpieza: '#EFFF88' },
  { general: '#FC7878' },
  { jardineria: '#49E754' },
];

export default function CreateEditTicke() {
  const [selectedService, setSelectedService] = useState<Services>();

  const onSubmit = (formData) => {
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
        <ServiceTypeButtons selectedServices={setSelectedService} />
        <div className='w-full'>
          <div className='md:text-3x1 text-xl sm:text-2xl'>Descripcion</div>
          <textarea
            name='descripcion'
            rows={4}
            className='w-full rounded-lg border px-4 py-2'
          ></textarea>
        </div>
        <div className='w-full'>
          <Input label='Area/Ubicacion' name='area' />
        </div>
        <div className='w-full'>
          <div className='md:text-3x1 text-xl sm:text-2xl'>Insumos</div>
          <textarea
            name='insumos'
            rows={4}
            className='w-full rounded-lg border px-4 py-2'
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
        <Button text='Crear' buttonType='submit' />
      </Form>
    </div>
  );
}
