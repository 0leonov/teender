const TextInput = ({ label, error, id, register, rules, type, ...props }) => {
  return (
    <div>
      <label className='label' htmlFor={id}>
        <span className='label-text'>{label}</span>
      </label>

      <input className={`input input-bordered w-full ${error && 'input-error'}`} type={type} id={id} {...register(id, rules)} {...props} />

      <label className={`label ${!error && 'hidden'}`}>
        <span className='label-text-alt text-error'>{error}</span>
      </label>
    </div>
  )
}

export default TextInput
