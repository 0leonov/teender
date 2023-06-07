import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'

import instance from '@http'

import { removeUser } from '@slices/userSlice'

const useLogout = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()

  return () =>
    instance
      .get('users/signOut')
      .then(() => {
        navigate('/login')
        dispatch(removeUser())
        localStorage.removeItem('token')
      })
      .catch(error => {
        console.error(`Logout failed: ${error}`)
      })
}

export default useLogout
