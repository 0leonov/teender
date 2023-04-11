import LogoIcon from '../icons/Logo'
import { Link } from 'react-router-dom'

const Logo = () => {
  return (
    <Link to='/' className='w-40 h-40 mb-4 btn btn-ghost rounded-full'>
      <LogoIcon className='fill-base-content' />
    </Link>
  )
}

export default Logo
