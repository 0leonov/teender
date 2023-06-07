import Avatar from '@components/Avatar'
import Next from '@components/icons/Next'
import Like from '@components/icons/Like'

const SearchView = ({ photo, age, description, name, handleNext, handleLike, isLoading }) => {
  return (
    <div className='w-full flex flex-col gap-8'>
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

      <div className='grid grid-cols-2 w-full gap-4'>
        <button className='btn btn-lg btn-error gap-2' disabled={isLoading} onClick={() => handleNext()}>
          <Next className='w-8 h-8 stroke-current' />
          Next
        </button>

        <button className='btn btn-lg btn-success gap-2' disabled={isLoading} onClick={() => handleLike()}>
          <Like className='w-8 h-8 stroke-current' />
          Like
        </button>
      </div>
    </div>
  )
}

export default SearchView
