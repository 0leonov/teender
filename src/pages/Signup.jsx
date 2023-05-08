import { useForm } from 'react-hook-form'
import { useNavigate } from 'react-router-dom'

import ErrorAlert from '@components/ErrorAlert'
import TextInput from '@components/TextInput'
import PrimaryButton from '@components/PrimaryButton'
import HeaderText from '@components/auth/HeaderText'
import FormContainer from '@components/auth/FormContainer'
import AuthContainer from '@components/auth/AuthContainer'
import LinkBlock from '@components/auth/LinkBlock'
import AgreeCheckbox from '@components/auth/AgreeCheckbox'

import { useFetch } from '@hooks/useFetch'

const Signup = () => {
  const navigate = useNavigate()

  const onSuccess = () => {
    navigate('/login')
  }

  const { isLoaded, error, handleCall } = useFetch('user/insert.php', onSuccess)

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
          value: 4,
          message: 'Cannot be shorter than 4 characters',
        },
        maxLength: {
          value: 16,
          message: 'Cannot be longer than 16 characters',
        },
        pattern: {
          value: /^[a-zA-Z0-9_]+/g,
          message: 'Must contain only letters, numbers or the underscore',
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
          value: 8,
          message: 'Cannot be shorter than 8 characters',
        },
        maxLength: {
          value: 50,
          message: 'Cannot be longer than 50 characters',
        },
        pattern: {
          value: /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]+/g,
          message: 'Must contain at least one letter and one number',
        },
      },
    },
  ]

  return (
    <main className='p-6 flex place-items-center justify-center gap-24'>
      <div className='py-6 px-4 max-w-[360px] flex-col gap-4 hidden lg:flex'>
        <h1 className='font-bold text-2xl'>Teender</h1>
        <p>
          This is a dating site, where finding your perfect match is our top priority! Our platform is designed to make it easy and fun for singles to connect and potentially find a long-term partner.
        </p>
        <b>Join Teender today and start your journey towards finding love! 💕</b>
      </div>

      <AuthContainer>
        <HeaderText content='Sign up' />

        {error && <ErrorAlert text={error} />}

        <FormContainer onSubmit={handleSubmit(handleCall)}>
          {inputProps.map(textInputField => (
            <TextInput key={textInputField.name} {...textInputField} register={register} />
          ))}

          <AgreeCheckbox register={register} name='Terms' rules={{ required: true }} error={errors.Terms} />

          <PrimaryButton text='Sign up' isLoading={!isLoaded} />
        </FormContainer>

        <LinkBlock text='Already have an account?' linkText='Log in' linkTo='/login' />
      </AuthContainer>
    </main>
  )
}
export default Signup
