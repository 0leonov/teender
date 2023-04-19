import { useForm } from 'react-hook-form'
import { useNavigate } from 'react-router-dom'

import ErrorAlert from '../components/ErrorAlert'
import TextInput from '../components/TextInput'
import LoadingButton from '../components/buttons/LoadingButton'
import PrimaryButton from '../components/buttons/PrimaryButton'
import HeaderText from '../components/auth/HeaderText'
import FormContainer from '../components/auth/FormContainer'
import AuthContainer from '../components/auth/AuthContainer'
import LinkBlock from '../components/auth/LinkBlock'
import { setUser } from '../store/slices/userSlice'
import { useDispatch } from 'react-redux'
import { useAxios } from '../hooks/useAxios'

const Login = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const successLogin = data => {
    dispatch(setUser(data.accessToken))
    navigate('/profile')
  }

  const { isLoading, error, call } = useAxios('user/login.php', successLogin)

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ mode: 'onBlur' })

  const inputProps = [
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

  const getInputs = () => inputProps.map(textInputField => <TextInput key={textInputField.name} {...textInputField} register={register} />)

  return (
    <main className='p-6 flex items-center justify-center gap-24'>
      <div className='max-w-[360px] hidden lg:flex'>
        <img src='/images/signup.png' alt='/images/signup.png' />
      </div>

      <AuthContainer>
        <HeaderText content='Log in' />

        {error && <ErrorAlert text={error} />}

        <FormContainer onSubmit={handleSubmit(call)}>
          {getInputs()}
          {isLoading ? <LoadingButton className='btn-primary' /> : <PrimaryButton text='Log in' />}
        </FormContainer>

        <LinkBlock text='New to Teender?' linkText='Create an account' linkTo='/signup' />
      </AuthContainer>
    </main>
  )
}

export default Login
