import { useNavigate } from 'react-router-dom'
import { useSelector } from 'react-redux'

import Next from '@components/icons/Next'
import Like from '@components/icons/Like'
import Avatar from '@components/Avatar'
import CommonContainer from '@components/containers/CommonContainer'

import Loading from '@pages/Loading'

import { useFetch } from '@hooks/useFetch'

const Main = () => {
  const { name, age, photo, description } = useSelector(state => state.user.info)

  const navigate = useNavigate()

  if (!name || !age || !photo)
    navigate('/profile/edit')

  const { data, isLoaded, error, refresh } = useFetch('user/get/getCouple/')

  if (!isLoaded) return <Loading />

  if (error) return error

  const handleNext = () => {
    refresh()
  }

  return (
    <CommonContainer>
      <div className='py-6 px-4 border rounded-box flex gap-4'>
        <Avatar url={data.photo} />

        <div className='max-w-xs flex flex-col gap-2'>
          <h1 className='text-xl font-bold'>{data.name}, {data.age}</h1>
          <p>{data.description}</p>
        </div>
      </div>

      <div className='grid grid-cols-2 w-full gap-4'>
        <button className='btn btn-lg btn-error gap-2' onClick={() => handleNext()}>
          <Next className='w-8 h-8 stroke-error-content' />
          Next
        </button>

        <button className='btn btn-lg btn-success gap-2'>
          <Like className='w-8 h-8 stroke-success-content' />
          Like
        </button>
      </div>
    </CommonContainer>
  )
}

export default Main
