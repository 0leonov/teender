import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'

import { availableThemes } from '@slices/themeSlice'
import { setTheme } from '@slices/themeSlice'
import { removeUser } from '@slices/userSlice'

import LogOut from '@components/icons/LogOut'

const SettingsModal = () => {
  const dispatch = useDispatch()

  const activeTheme = useSelector(state => state.theme.value)

  const navigate = useNavigate()

  const handleLogOut = () => {
    navigate('/login')
    dispatch(removeUser())
    localStorage.removeItem('token')
  }

  const handleThemeSelect = theme => {
    dispatch(setTheme(theme))
  }

  return (
    <label htmlFor='settings-modal' className='modal'>
      <label className='modal-box flex flex-col gap-4'>
        <div className='flex flex-col gap-2'>
          <h1 className='text-2xl font-bold'>Settings</h1>

          <h2 className='label-text'>Theme</h2>

          <select className='select select-bordered w-full' value={activeTheme} onChange={e => handleThemeSelect(e.target.value)}>
            {availableThemes.map(theme => (
              <option key={theme} value={theme}>
                {theme}
              </option>
            ))}
          </select>
        </div>

        <button className='btn btn-outline gap-2' onClick={_ => handleLogOut()}>
          <LogOut />
          <p className='hidden lg:flex'>Log out</p>
        </button>
      </label>
    </label>
  )
}

export default SettingsModal
