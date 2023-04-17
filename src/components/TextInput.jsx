const TextInput = ({ name, label, rules, register, error }) => {
  return (
    <div>
      <label htmlFor={name} className='label-text'>
        {label}
      </label>

      <input {...register(name, rules)} id={name} className={`input input-bordered w-full ${error?.message ? ' input-error' : ''}`} />

      <label htmlFor={name} className='label-text-alt text-error'>
        {error?.message}
      </label>
    </div>
  )
}

export default TextInput
