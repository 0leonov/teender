import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'

import Logo from '@components/Logo'
import Avatar from '@components/Avatar'
import AvatarPlaceholder from '@components/AvatarPlaceholder'
import Search from '@components/icons/Search'
import Direct from '@components/icons/Direct'

const Navbar = () => {
  const { photo, username } = useSelector(state => state.user.info)

  const navigationButtons = [
    {
      text: 'Search',
      link: '/',
      icon: <Search />,
    },
    {
      text: 'Direct',
      link: '/direct',
      icon: <Direct />,
    },
  ]

  return (
    <nav className='navbar max-w-screen-xl justify-between'>
      <Link to='/' className='btn btn-ghost'>
        <Logo />
      </Link>

      <div className='flex gap-2'>
        {navigationButtons.map(({ text, link, icon }) => (
          <Link to={link} key={text} className='btn btn-ghost gap-2'>
            {icon}

            <p className='hidden sm:flex'>{text}</p>
          </Link>
        ))}

        <Link to={'/profile'} className='btn btn-circle ring-1 ring-primary'>
          {photo ? <Avatar photo={photo} /> : <AvatarPlaceholder placeholder={username[0].toUpperCase()} />}
        </Link>
      </div>
    </nav>
  )
}

export default Navbar
