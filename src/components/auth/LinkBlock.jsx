import { Link } from 'react-router-dom'
import React from 'react'

const LinkBlock = ({ text, linkText, linkTo }) => {
  return (
    <div className='p-4 py-6 border rounded-box text-center'>
      {text}{' '}
      <Link to={linkTo} className='link link-primary'>
        {linkText}
      </Link>
    </div>
  )
}

export default LinkBlock
