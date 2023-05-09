import { useForm } from 'react-hook-form'
import { useNavigate } from 'react-router-dom'

import ErrorAlert from '@components/ErrorAlert'
import TextInput from '@components/TextInput'
import PrimaryButton from '@components/PrimaryButton'
import HeaderText from '@components/auth/HeaderText'
import FormContainer from '@components/auth/FormContainer'
import AuthContainer from '@components/auth/AuthContainer'
import LinkBlock from '@components/auth/LinkBlock'

import { useFetch } from '@hooks/useFetch'
import { useFetchUser } from '@hooks/useFetchUser'

const Login = () => {
  const navigate = useNavigate()
  useFetchUser()

  const onSuccess = data => {
    localStorage.setItem('token', data.accessToken)
    navigate('/')
  }

  const { error, isLoaded, handleCall } = useFetch('user/login.php', onSuccess)

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

  return (
    <main className='p-6 flex items-center justify-center gap-24'>
      <div className='max-w-[360px] hidden lg:flex'>
        <img src='/images/signup.png' alt='/images/signup.png' />
      </div>

      <AuthContainer>
        <HeaderText content='Log in' />

        {error && <ErrorAlert text={error} />}

        <FormContainer onSubmit={handleSubmit(handleCall)}>
          {inputProps.map(textInputField => (
            <TextInput key={textInputField.name} {...textInputField} register={register} />
            ))}

          <PrimaryButton text='Log in' isLoading={!isLoaded} />
        </FormContainer>

        <LinkBlock text='New to Teender?' linkText='Create an account' linkTo='/signup' />
      </AuthContainer>
    </main>
  )
}

export default Login
