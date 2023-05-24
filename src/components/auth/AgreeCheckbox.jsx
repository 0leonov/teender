import { Link } from 'react-router-dom'

const AgreeCheckbox = ({ name, rules, register, error }) => {
  return (
    <div className='flex gap-2'>
      <input type='checkbox' className={`checkbox ${error ? 'checkbox-error' : 'checkbox-primary'}`} {...register(name, rules)} />

      <span className='label-text'>
        I agree with the{' '}
        <Link to='terms' className='link link-primary'>
          Terms
        </Link>{' '}
        and{' '}
        <Link to='terms' className='link link-primary'>
          {' '}
          Conditions
        </Link>
        .
      </span>
    </div>
  )
}

export default AgreeCheckbox
