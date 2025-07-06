type Props = {
  text: string;
  buttonType?: 'submit' | 'reset' | 'button';
  buttonClassName?: string;
};

export default function Button({ text, buttonType, buttonClassName }: Props) {
  return (
    <button
      type={buttonType || undefined}
      className={`rounded-lg bg-radial-[at_25%_25%] from-sky-400 via-blue-400 to-indigo-900 to-90% px-4 py-2 font-semibold tracking-widest text-white ${buttonClassName}`}
    >
      {text || 'Enviar'}
    </button>
  );
}
