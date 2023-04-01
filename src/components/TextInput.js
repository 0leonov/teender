const TextInput = ({name, type, label, register, errors, rules}) => {
  return (
    <div>
      <p className='mb-2 text-neutral-500 text-sm'>{label}</p>

      <input {...(register(name, rules))} type={type} className={
        `w-full py-2.5 px-4 transition rounded appearance-none text-neutral-400 leading-tight focus:outline-none focus:bg-white
        ${errors?.message ? 'bg-red-50 ring-red-500 ring-1 hover:bg-red-100 focus:ring-red-500' : 'bg-neutral-100 hover:bg-neutral-200 focus:ring-1 focus:ring-blue-500'}`
      }/>

      <p className='text-red-500 text-xs'>{errors?.message}</p>
    </div>
  );
};

export default TextInput;