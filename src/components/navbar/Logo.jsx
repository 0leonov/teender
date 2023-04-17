import { Link } from 'react-router-dom'

import Icon from '../icons/Logo'

const Logo = () => {
  return (
    <Link to='/' className='btn btn-ghost normal-case text-xl'>
      <Icon className='h-8 mr-4 fill-base-content' />
      <h1>Teender</h1>
    </Link>
  )
}

export default Logo
