import { useForm } from 'react-hook-form'

import LoginView from '@pages/Login/LoginView'
import { useNavigate } from 'react-router-dom'
import usePost from '@hooks/usePost'

const LoginContainer = () => {
  const navigate = useNavigate()

  const onSuccess = data => {
    localStorage.setItem('token', data.accessToken)
    navigate('/')
  }

  const { isLoading, error, handleCall } = usePost('user/login', onSuccess)

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ mode: 'onBlur' })

  return <LoginView error={error} isLoading={isLoading} register={register} inputErrors={errors} handleSubmit={handleSubmit(handleCall)} />
}

export default LoginContainer
