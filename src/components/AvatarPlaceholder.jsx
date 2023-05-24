const AvatarPlaceholder = ({ placeholder }) => {
  return (
    <div className='avatar placeholder'>
      <div className='w-32 h-32 rounded-full text-neutral-content bg-neutral-focus text-4xl capitalize'>
        {placeholder}
      </div>
    </div>
  )
}

export default AvatarPlaceholder
