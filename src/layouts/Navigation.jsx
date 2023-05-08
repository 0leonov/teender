import { Link } from 'react-router-dom'
import { useDispatch } from 'react-redux'

import Home from '@components/icons/Home'
import Direct from '@components/icons/Direct'
import Profile from '@components/icons/Profile'
import LogOut from '@components/icons/LogOut'

import { removeUser } from '@slices/userSlice'

const Navigation = () => {
  const dispatch = useDispatch()

  // const user = useSelector(state => state.user.info)

  const handleLogOut = () => {
    dispatch(removeUser())
    localStorage.removeItem('token')
  }

  const links = [
    {
      to: '/',
      icon: <Home />,
      text: 'Home',
    },
    {
      to: '/direct',
      icon: <Direct />,
      text: 'Direct',
    },
    {
      to: '/profile',
      icon: Profile(),
      text: 'Profile',
    },
  ]

  return (
    <div className='flex'>
      <div className='btm-nav nav border-t sm:hidden'>
        {links.map(link => (
          <Link to={link.to} className='gap-2' key={link.text}>
            <div className='w-6 h-6'>{link.icon}</div>
            <p className='hidden lg:flex'>{link.text}</p>
          </Link>
        ))}
      </div>

      <div className='px-2 py-6 border-r flex-col justify-between hidden sm:flex lg:px-6 lg:w-64'>
        <div className='flex flex-col gap-2'>
          {links.map(link => (
            <Link to={link.to} className='btn btn-ghost gap-2 flex lg:justify-start' key={link.text}>
              <div className='w-6 h-6'>{link.icon}</div>
              <p className='hidden lg:flex'>{link.text}</p>
            </Link>
          ))}
        </div>

        <button className='btn btn-outline gap-2' onClick={_ => handleLogOut()}>
          <LogOut />
          <p className='hidden lg:flex'>Log out</p>
        </button>
      </div>
    </div>
  )
}

export default Navigation
