import BurgerIcon from './icons/Burger'

const Burger = ({ burgerItems }) => {
  return (
    <div className='dropdown dropdown-end'>
      <button className='btn btn-primary sm:hidden p-2.5 w-12'>
        <BurgerIcon className='stroke-white' />
      </button>

      <ul className='menu menu-compact dropdown-content w-32 p-2 rounded-box mt-3 bg-primary text-white'>{burgerItems}</ul>
    </div>
  )
}

export default Burger
