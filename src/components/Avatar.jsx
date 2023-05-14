const Avatar = ({ src, className, alt }) => {
  return (
    <div className={`avatar rounded-full border-2 border-base-content bg-primary ${className}`}>
      <img className='rounded-full' src={src} alt={alt} />
    </div>
  )
}

export default Avatar
