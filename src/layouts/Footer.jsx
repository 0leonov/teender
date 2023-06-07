import GitHub from '@components/icons/GitHub'
import { Link } from 'react-router-dom'

const Footer = () => {
  const links = [
    {
      href: '/terms',
      text: 'Terms of use',
    },
    {
      href: '/terms',
      text: 'Privacy policy',
    },
    {
      href: '/terms',
      text: 'Cookie policy',
    },
  ]

  return (
    <footer className='w-full p-4 flex justify-between items-center'>
      <div className='flex gap-4 text-sm'>
        {links.map(({ href, text }) => (
          <Link to={href} className='link link-hover' key={text}>
            {text}
          </Link>
        ))}
      </div>

      <a href='https://github.com/0leonov/teender/' target='_blank' className='hover:fill-base-content fill-base-300 transition w-6'>
        <GitHub />
      </a>
    </footer>
  )
}

export default Footer
