import { Link, Outlet, useLocation } from 'react-router-dom'

import Footer from './Footer'
import Logo from '@components/Logo'

const AuthRoot = () => {
  return (
    <div className='min-h-screen flex flex-col'>
      <nav>
        <div className='navbar bg-base-100'>
          <Link to='/' className='btn btn-ghost'>
            <Logo />
          </Link>
        </div>
      </nav>

      <div className='grow p-4 flex flex-col justify-center items-center gap-24'>
        <header className='text-6xl text-center'>Welcome to Teender!</header>

        <div className='w-full flex justify-center items-center gap-24'>
          <img src='/images/hero.png' alt='hero' className='hidden lg:flex' />

          <Outlet />
        </div>
      </div>

      <Footer />
    </div>
  )
}

export default AuthRoot
