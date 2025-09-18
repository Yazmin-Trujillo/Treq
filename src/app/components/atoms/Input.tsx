type Props = {
  label?: string;
  name: string;
  defaultValue?: string;
  inputType?:
    | 'button'
    | 'checkbox'
    | 'color'
    | 'date'
    | 'datetime'
    | 'email'
    | 'file'
    | 'hidden'
    | 'image'
    | 'month'
    | 'number'
    | 'password'
    | 'radio'
    | 'range'
    | 'reset'
    | 'search'
    | 'submit'
    | 'tel'
    | 'text'
    | 'time'
    | 'url'
    | 'week';
  required?: boolean;
};

export default function Input({
  label,
  name,
  defaultValue,
  inputType,
  required = false,
}: Props) {
  return (
    <>
      {label ? (
        <div className='text-xl sm:text-2xl md:text-3xl'>{label}</div>
      ) : null}
      <input
        name={name}
        type={inputType || undefined}
        required={required}
        className='w-full rounded-lg border border-stone-400 px-4 py-2 hover:border-sky-400 focus:shadow-[0_0_0_0.2rem_rgb(165,243,252)] focus:outline-0 focus:outline-offset-0 focus:outline-sky-200'
        defaultValue={defaultValue}
      />
    </>
  );
}
//focus:outline-4 focus:outline-offset-0 focus:outline-sky-200
