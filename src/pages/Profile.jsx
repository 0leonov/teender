import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'

import { useFetchUser } from '@hooks/useFetchUser'

import Settings from '@components/icons/Settings'
import Avatar from '@components/Avatar'
import AvatarPlaceholder from '@components/AvatarPlaceholder'
import CommonContainer from '@components/containers/CommonContainer'
import SettingsModal from '@components/SettingsModal'

const Profile = () => {
  const { name, age, photo, description } = useSelector(state => state.user.info)

  const { error, isLoaded } = useFetchUser()

  if (error) return error

  if (!isLoaded) return

  return (
    <CommonContainer className='gap-8'>
      <header className='h-32 px-4 flex justify-between items-end box-content pb-8 border-b'>
        <div className='w-32 h-32'>
          {photo ? <Avatar src={photo} /> : <AvatarPlaceholder placeholder='A' className='text-4xl' />}
        </div>

        <div className='flex gap-2'>
          <label className='btn btn-square btn-ghost' htmlFor='settings-modal'>
            <Settings className='w-6 h-6' />
          </label>

          <input type='checkbox' id='settings-modal' className='modal-toggle' />
          <SettingsModal />

          <Link to='edit' className='btn btn-primary'>
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
    </CommonContainer>
  )
}

export default Profile
