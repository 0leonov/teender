import Avatar from '@components/Avatar'
import Next from '@components/icons/Next'
import Like from '@components/icons/Like'

const Liked = ({ id, photo, name, age, description, handleIgnore, handleLike }) => {
  return (
    <div key={id} className='border rounded-box bg-base-100 p-4 flex justify-between flex-col gap-4 sm:flex-row sm:items-end'>
      <div className='flex gap-4'>
        <div className='w-32 h-32'>
          <Avatar photo={photo} />
        </div>

        <div className='flex flex-col gap-2'>
          <h1 className='text-2xl font-bold'>
            {name}, {age}
          </h1>

          <p className='break-words'>{description}</p>
        </div>
      </div>

      <div className='flex gap-4 justify-center'>
        <button onClick={() => handleIgnore(id)} className='btn btn-error btn-square'>
          <Next className='w-6 h-6 stroke-current' />
        </button>

        <button onClick={() => handleLike(id)} className='btn btn-success btn-square'>
          <Like className='w-6 h-6 stroke-current' />
        </button>
      </div>
    </div>
  )
}

export default Liked
