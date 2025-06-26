type Props = {
  text: string;
};

export default function Button({ text }: Props) {
  return (
    <button className='rounded-lg bg-[#6156FF] px-4 py-2 font-semibold text-white'>
      {text || 'Enviar'}
    </button>
  );
}
