import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'

import Settings from '@components/icons/Settings'
import Avatar from '@components/Avatar'
import AvatarPlaceholder from '@components/AvatarPlaceholder'
import { useFetchUser } from '@hooks/useFetchUser'

const Profile = () => {
  const { name, age, photo, description } = useSelector(state => state.user.info)

  const { error, isLoaded } = useFetchUser()

  if (error) return error

  if (!isLoaded) return

  return (
    <main className='max-w-[640px] w-full mx-auto'>
      <header className='h-32 px-4 flex justify-between items-end box-content my-8 py-8 border-b'>
        <div className='w-32 h-32 rounded-full border-2 border-base-content avatar'>{photo ? <Avatar src={photo} /> : <AvatarPlaceholder placeholder='A' className='text-4xl' />}</div>

        <div className='flex gap-2'>
          <button className='btn btn-square btn-ghost'>
            <Settings className='w-6 h-6' />
          </button>

          <Link to='/edit' className='btn btn-primary'>
            Edit profile
          </Link>
        </div>
      </header>

      <div className='px-4'>
        <section className='flex items-center gap-4'>
          <div className='flex flex-col justify-between gap-4'>
            <h1 className='text-2xl font-bold break-all'>
              {name}, {age}
            </h1>
          </div>
        </section>

        <section>
          <p className='break-words'>{description}</p>
        </section>
      </div>
    </main>
  )
}

export default Profile
