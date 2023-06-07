import { Link } from 'react-router-dom'

import Logo from '@components/icons/Logo'
import Avatar from '@components/Avatar'
import AvatarPlaceholder from '@components/AvatarPlaceholder'

const NavigationContainer = () => {
  return (
    <div className='flex max-w-xl justify-between mx-auto'>
      <Link to='/' className='btn btn-ghost gap-2'>
        <Logo className='w-6 h-6' />
        <p>
          <span className='text-primary font-bold'>Teen</span>der
        </p>
      </Link>

      <div className='flex gap-2'>
        <Link to='/' className='btn btn-ghost gap-2'>
          <svg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' strokeWidth={2} stroke='currentColor' className='w-4 h-4'>
            <path strokeLinecap='round' strokeLinejoin='round' d='M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z' />
          </svg>
          Search
        </Link>

        <Link to='/direct' className='btn btn-ghost gap-2'>
          <svg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' strokeWidth={2} stroke='currentColor' className='w-4 h-4'>
            <path
              strokeLinecap='round'
              strokeLinejoin='round'
              d='M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75'
            />
          </svg>
          Direct
        </Link>

        <Link to='/profile' className='btn btn-circle btn-ghost'>
          {photo ? <Avatar url={photo} /> : <AvatarPlaceholder placeholder={name[0].toUpperCase()} />}
        </Link>
      </div>
    </div>
  )
}

export default NavigationContainer
