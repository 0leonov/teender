const Avatar = ({ url }) => {
  return (
    <div className={'w-32 h-32 avatar rounded-full overflow-hidden'}>
      <img src={url} alt='Avatar' />
    </div>
  )
}

export default Avatar
