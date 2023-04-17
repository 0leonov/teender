import GitHub from '../components/icons/GitHub'

const Footer = () => {
  return (
    <footer className='flex justify-center p-6'>
      <a href='https://github.com/0leonov/teender' target='_blank' className='h-8 w-8 rounded-full outline-offset-2 outline-base-content transition fill-base-300 hover:fill-base-content'>
        <GitHub />
      </a>
    </footer>
  )
}

export default Footer
