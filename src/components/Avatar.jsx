const Avatar = ({ photo }) => {
  return (
    <div className='w-full h-full avatar rounded-full overflow-hidden'>
      <img src={`data:image/png;base64,${photo}`} alt='avatar' />
    </div>
  )
}

export default Avatar
