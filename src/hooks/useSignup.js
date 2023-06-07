import { useNavigate } from 'react-router-dom'

import usePost from '@hooks/usePost'

const useSign = () => {
  const navigate = useNavigate()

  const onSuccess = () => {
    navigate('/')
  }

  const { error, isLoaded, handleCall } = usePost('users/insert', onSuccess)

  return { error, isLoaded, handleCall }
}

export default useSign
