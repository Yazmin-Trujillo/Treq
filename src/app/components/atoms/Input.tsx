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
        <div className='md:text-3x1 text-xl sm:text-2xl'>{label}</div>
      ) : null}
      <input
        name={name}
        type={inputType || undefined}
        required={required}
        className='w-full rounded-lg border px-4 py-2'
        defaultValue={defaultValue}
      />
    </>
  );
}
