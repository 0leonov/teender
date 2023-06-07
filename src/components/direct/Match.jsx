import Avatar from '@components/Avatar'

const Match = ({ id, photo, name, age, description, email }) => {
  return (
    <div key={id} className='border rounded-box bg-base-100 p-4 flex gap-4'>
      <div className='w-32 h-32'>
        <Avatar photo={photo} />
      </div>

      <div className='flex flex-col gap-2'>
        <h1>
          <div className='text-2xl font-bold'>
            {name}, {age}
          </div>
          <div className='text-sm'>{email}</div>
        </h1>

        <p className='break-words'>{description}</p>
      </div>
    </div>
  )
}

export default Match
