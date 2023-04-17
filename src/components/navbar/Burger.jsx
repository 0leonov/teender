import BurgerIcon from '../icons/Burger'

const Burger = ({ burgerItems }) => {
  return (
    <div className='dropdown dropdown-end'>
      <button className='btn btn-primary sm:hidden p-2.5 w-12'>
        <BurgerIcon className='stroke-primary-content' />
      </button>

      <ul className='menu dropdown-content w-40 p-2 rounded-box mt-3 bg-primary'>{burgerItems}</ul>
    </div>
  )
}

export default Burger
