const AgreeCheckbox = ({ name, rules, register, error }) => {


  return (
    <div className='flex gap-2'>
      <input type='checkbox'
             className={`checkbox ${error ? 'checkbox-error' : 'checkbox-primary'}`} {...register(name, rules)} />

      <span className='label-text'>
      I agree with the{' '}
        <a href="/terms" id="section1" className='link link-primary'>
        Terms
      </a>{' '}
        and{' '}
        <a href="/terms" id="section2" className='link link-primary'>
        Rules
      </a>
    </span>
    </div>
  )
}
export default AgreeCheckbox
