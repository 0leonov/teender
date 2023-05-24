const TextInput = ({ name, label, rules, register, error, type, ...props }) => {

  return (
    <div className='form-control'>
      <label htmlFor={name} className='label label-text'>
        {label}
      </label>

      <input {...register(name, rules)} type={type} id={name}
             className={`input input-bordered w-full ${error?.message ? ' input-error' : ''}`} {...props} />

      {error?.message && <label htmlFor={name} className='label label-text-alt text-error'>
        {error.message}
      </label>}

    </div>
  )
}

export default TextInput
