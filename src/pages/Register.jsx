import { useNavigate } from 'react-router-dom'
import { useForm } from 'react-hook-form'
import { usePost } from '../hooks/usePost'

import LinkBlock from '../components/auth/LinkBlock'
import ErrorAlert from '../components/ErrorAlert'
import Logo from '../components/auth/Logo'
import TextInputField from '../components/TextInputField'
import LoadingButton from '../components/buttons/LoadingButton'
import PrimaryButton from '../components/buttons/PrimaryButton'

import AuthContainer from '../containers/Auth'
import FormContainer from '../containers/Form'

const Register = () => {
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
        minLength: {
          value: 5,
          message: 'Cannot be shorter than 5 characters',
        },
        maxLength: {
          value: 50,
          message: 'Cannot be longer than 50 characters',
        },
      },
    },

    {
      name: 'email',
      type: 'email',
      label: 'Email',
      error: errors.email,
      rules: {
        required: 'This is a required field',
        pattern: {
          value: /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/g,
          message: 'Invalid email',
        },
        maxLength: {
          value: 50,
          message: 'Cannot be longer than 5 characters',
        },
      },
    },

    {
      name: 'password',
      type: 'password',
      label: 'Password',
      error: errors.password,
      rules: {
        required: 'This is a required field',
        minLength: {
          value: 5,
          message: 'Cannot be shorter than 5 characters',
        },
        maxLength: {
          value: 50,
          message: 'Cannot be longer than 50 characters',
        },
      },
    },
  ]
  const GetTextInputFields = () => textInputFieldsParameters.map(textInputField => <TextInputField {...textInputField} register={register} />)

  return (
    <AuthContainer>
      <Logo />

      <h1 className='text-center'>Sign up to Teender</h1>

      {error !== undefined && <ErrorAlert error={error} />}

      <FormContainer onSubmit={handleSubmit(call)}>
        {GetTextInputFields()}
        {isLoading ? <LoadingButton className='btn-primary' /> : <PrimaryButton text='Sign up' />}
      </FormContainer>

      <LinkBlock text='Already have an account?' linkText='Log in' linkTo='/login' />
    </AuthContainer>
  )
}

export default Register
