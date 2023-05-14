const AvatarPlaceholder = ({ placeholder, className }) => {
  return (
    <div className='avatar placeholder w-full h-full rounded-full border-2 border-base-content'>
      <div className={`bg-primary rounded-full align-baseline ${className}`}>{placeholder}</div>
    </div>
  )
}

export default AvatarPlaceholder
