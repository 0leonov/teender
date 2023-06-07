const AvatarPlaceholder = ({ placeholder }) => {
  return (
    <div className='w-full h-full avatar placeholder'>
      <div className={'rounded-full text-neutral-content bg-neutral-focus text-xl capitalize'}>{placeholder}</div>
    </div>
  )
}

export default AvatarPlaceholder
