import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'

import Avatar from '@components/Avatar'
import Settings from '@components/icons/Settings'
import SettingsModal from '@components/SettingsModal'
import AvatarPlaceholder from '@components/AvatarPlaceholder'

const Profile = () => {
  const { name, age, photo, description, username } = useSelector(state => state.user.info)

  return (
    <div className='w-full flex flex-col gap-4'>
      <header className='flex justify-between items-end'>
        <div className='w-32 h-32'>{photo ? <Avatar photo={photo} /> : <AvatarPlaceholder placeholder={username[0].toUpperCase()} />}</div>

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

      <div className='flex flex-col gap-2'>
        <h1 className='text-2xl font-bold break-words'>
          {name}
          {age && `, ${age}`}
        </h1>

        <p className='break-words outline-noneщаа'>{description}</p>
      </div>
    </div>
  )
}

export default Profile
