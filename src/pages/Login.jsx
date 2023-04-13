import { useNavigate } from 'react-router-dom'
import { useForm } from 'react-hook-form'
import { usePost } from '../hooks/usePost'

import Logo from '../components/auth/Logo'

import LinkBlock from '../components/auth/LinkBlock'
import ErrorAlert from '../components/ErrorAlert'
import TextInputField from '../components/TextInputField'
import LoadingButton from '../components/buttons/LoadingButton'
import PrimaryButton from '../components/buttons/PrimaryButton'

import AuthContainer from '../containers/Auth'
import FormContainer from '../containers/Form'

const Login = () => {
  const navigate = useNavigate()

  const successRegister = () => {
    navigate('/')
  }

  const { isLoading, error, call } = usePost('http://localhost:80/api/user/insert.php', successRegister)

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ mode: 'onBlur' })

  const textInputFieldsParameters = [
    {
      name: 'username',
      type: 'text',
      label: 'Username',
      error: errors.username,
      rules: {
        required: 'This is a required field',
      },
    },

    {
      name: 'password',
      type: 'password',
      label: 'Password',
      error: errors.password,
      rules: {
        required: 'This is a required field',
      },
    },
  ]
  const GetTextInputFields = () => textInputFieldsParameters.map(textInputField => <TextInputField {...textInputField} register={register} />)

  return (
    <AuthContainer>
      <Logo />

      <h1 className='text-center'>Log in to Teender</h1>

      {error !== undefined && <ErrorAlert error={error} />}

      <FormContainer onSubmit={handleSubmit(call)}>
        {GetTextInputFields()}
        {isLoading ? <LoadingButton className='btn-primary' /> : <PrimaryButton text='Log in' />}
      </FormContainer>

      <LinkBlock text='New to Teender?' linkText='Create an account' linkTo='/register' />
    </AuthContainer>
  )
}
export default Login
