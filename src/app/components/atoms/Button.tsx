type Props = {
  text: string;
  buttonType: 'submit' | 'reset' | 'button' | undefined;
};

export default function Button({ text, buttonType }: Props) {
  return (
    <button
      type={buttonType || undefined}
      className='rounded-lg bg-[#6156FF] px-4 py-2 font-semibold text-white'
    >
      {text || 'Enviar'}
    </button>
  );
}
