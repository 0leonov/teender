import { useForm } from 'react-hook-form'
import { useNavigate } from 'react-router-dom'

import usePost from '@hooks/usePost'
import SignupView from '@pages/Signup/SignupView'

const SignupContainer = () => {
  const navigate = useNavigate()

  const onSuccess = () => {
    navigate('/login')
  }

  const { isLoading, error, handleCall } = usePost('user/insert', onSuccess)

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ mode: 'onBlur' })

  return <SignupView register={register} error={error} inputErrors={errors} handleSubmit={handleSubmit(handleCall)} isLoading={isLoading} />
}
export default SignupContainer
