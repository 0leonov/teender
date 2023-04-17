import { Outlet } from 'react-router-dom'

import Navbar from './Navbar'
import Footer from './Footer'

const Root = () => {
  return (
    <div className='min-h-screen flex flex-col select-none'>
      <Navbar />

      <div className='grow grid items-center'>
        <Outlet />
      </div>

      <Footer />
    </div>
  )
}

export default Root
