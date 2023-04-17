import { Link } from 'react-router-dom'
import { v4 as uuid } from 'uuid'

import Logo from '../components/navbar/Logo'

import Burger from '../components/navbar/Burger'

const Navbar = () => {
  const navigationOptions = [
    ['About us', '/about-us'],
    ['Our project', '/our-project'],
  ]

  const burgerOptions = [['Sign up', '/signup'], ...navigationOptions]

  const burgerItems = burgerOptions.map(option => (
    <li key={uuid()}>
      <Link to={option[1]}>{option[0]}</Link>
    </li>
  ))

  const navigationItems = navigationOptions.map(option => (
    <li key={uuid()}>
      <Link to={option[1]}>{option[0]}</Link>
    </li>
  ))

  return (
    <nav className='navbar mx-auto container'>
      <div className='navbar-start'>
        <Logo />
      </div>

      <div className='navbar-center'>
        <ul className='menu menu-horizontal hidden sm:flex gap-1 rounded-full px-1'>{navigationItems}</ul>
      </div>

      <div className='navbar-end'>
        <Burger burgerItems={burgerItems} />
        <Link className='btn btn-primary mr-4 hidden sm:flex' to='/signup'>
          Sign up
        </Link>
      </div>
    </nav>
  )
}

export default Navbar
