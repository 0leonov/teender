import { Link } from 'react-router-dom'

const TermsCheckbox = ({ id, error, register, rules }) => {
  return (
    <div className='flex items-center gap-2'>
      <input type='checkbox' className={`checkbox ${error ? 'checkbox-error' : 'checkbox-primary'}`} {...register(id, rules)} />

      <p className='label-text'>
        <span>I agree with the </span>
        <Link to='/terms' className='link link-primary link-hover'>
          Terms
        </Link>
        <span> and </span>
        <Link to='/terms' className='link link-primary link-hover'>
          Conditions
        </Link>
      </p>
    </div>
  )
}

export default TermsCheckbox
