const AvatarPlaceholder = ({ placeholder, className }) => {
  return (
    <div className='avatar placeholder'>
      <div className={`bg-primary rounded-full align-baseline ${className}`}>{placeholder}</div>
    </div>
  )
}

export default AvatarPlaceholder
