import { useForm } from 'react-hook-form'
import { useRegistration } from '../hooks/useRegistration'

import ErrorAlert from '../components/ErrorAlert'
import TextInput from '../components/TextInput'
import LoadingButton from '../components/buttons/LoadingButton'
import PrimaryButton from '../components/buttons/PrimaryButton'
import HeaderText from '../components/auth/HeaderText'
import FormContainer from '../components/auth/FormContainer'
import AuthContainer from '../components/auth/AuthContainer'
import SuccessAlert from '../components/SuccessAlert'

const Signup = () => {
  const { isLoading, isSuccess, error, call } = useRegistration()

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

  const getInput = () => inputProps.map(textInputField => <TextInput key={textInputField.name} {...textInputField} register={register} />)

  return (
    <main className='p-6 flex flex-col items-center justify-center gap-4'>
      <AuthContainer>
        <HeaderText content='Sign up' />

        {!isLoading && error ? <ErrorAlert text={error} /> : isSuccess && <SuccessAlert text='Registration completed' />}

        <FormContainer onSubmit={handleSubmit(call)}>
          {getInput()}
          {isLoading ? <LoadingButton className='btn-primary' /> : <PrimaryButton text='Sign up' />}
        </FormContainer>
      </AuthContainer>
    </main>
  )
}
export default Signup
