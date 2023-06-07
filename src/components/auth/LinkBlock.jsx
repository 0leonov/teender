import { Link } from 'react-router-dom'

const LinkBlock = ({ text, linkText, href }) => {
  return (
    <div className='p-6 rounded-btn bg-base-200'>
      <p className='text-center'>
        <span>{text} </span>

        <Link to={href} className='link link-hover link-primary'>
          {linkText}
        </Link>
      </p>
    </div>
  )
}

export default LinkBlock
