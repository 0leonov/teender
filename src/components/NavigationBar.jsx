import { Link } from 'react-router-dom'
import { v4 } from 'uuid'

import Logo from './icons/Logo'

import Burger from './Burger'

const NavigationBar = () => {
  const navigationOptions = [
    ['About us', '/about-us'],
    ['Our project', '/our-project'],
  ]

  const burgerOptions = [['Sign in', '/register'], ['Log in', '/login'], ...navigationOptions]

  const burgerItems = burgerOptions.map(option => (
    <li key={v4()}>
      <Link to={option[1]}>{option[0]}</Link>
    </li>
  ))

  const navigationItems = navigationOptions.map(option => (
    <li key={v4()}>
      <Link to={option[1]}>{option[0]}</Link>
    </li>
  ))

  return (
    <nav className='navbar container mx-auto'>
      <div className='navbar-start'>
        <Link to='/' className='btn btn-ghost normal-case text-xl'>
          <Logo className='h-8 mr-4 fill-base-content' />
          <h1>Teender</h1>
        </Link>
      </div>

      <div className='navbar-center hidden sm:flex'>
        <ul className='menu menu-horizontal px-1'>{navigationItems}</ul>
      </div>

      <div className='navbar-end'>
        <Link className='btn btn-ghost mr-4 hidden sm:flex' to='/register'>
          Log in
        </Link>

        <Link className='btn btn-primary hidden sm:flex' to='/register'>
          Sign up
        </Link>

        <Burger burgerItems={burgerItems} />
      </div>
    </nav>
  )
}

export default NavigationBar
