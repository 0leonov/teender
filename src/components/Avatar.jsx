const Avatar = ({ src, className, alt }) => {
  return (
    <div className='avatar'>
      <div className={`bg-primary rounded-full ${className}`}>
        <img src={src} alt={alt} />
      </div>
    </div>
  )
}

export default Avatar
