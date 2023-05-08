import { Outlet } from 'react-router-dom'

import Footer from './Footer'

const AuthRoot = () => {
  return (
    <div className='min-h-screen flex flex-col select-none'>
      <div className='grow grid items-center'>
        <Outlet />
      </div>

      <Footer />
    </div>
  )
}

export default AuthRoot
