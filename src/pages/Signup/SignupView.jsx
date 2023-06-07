import TextInput from '@components/TextInput'
import TermsCheckbox from '@components/auth/TermsCheckbox'
import PrimaryButton from '@components/PrimaryButton'
import LinkBlock from '@components/auth/LinkBlock'
import Alert from '@components/auth/Alert'

const SignupView = ({ error, handleSubmit, inputErrors, register, isLoading }) => {
  const inputProps = [
    {
      label: 'Username',
      id: 'username',
      rules: {
        required: 'Required',
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
      label: 'Email',
      id: 'email',
      rules: {
        required: 'Required',
        pattern: {
          value: /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/g,
          message: 'Invalid email',
        },
        maxLength: {
          value: 50,
          message: 'Cannot be longer than 50 characters',
        },
      },
    },
    {
      label: 'Password',
      id: 'password',
      type: 'password',
      rules: {
        required: 'Required',
        pattern: {
          value: /^(?=.*?[a-zA-Z])(?=.*?[0-9]).{8,32}$/g,
          message: 'Must contain at least 1 lowercase letter, 1 digit, and be 8 - 32 long.',
        },
      },
    },
  ]

  return (
    <main className='max-w-sm w-full flex flex-col gap-8'>
      <h1 className='text-4xl font-bold'>Sign up</h1>

      <form className='form-control gap-4' onSubmit={handleSubmit}>
        {error && <Alert text={error} />}

        <div className='form-control gap-2'>
          {inputProps.map(props => (
            <TextInput key={props.id} register={register} {...props} error={inputErrors[props.id]?.message} />
          ))}

          <TermsCheckbox register={register} id={'terms'} error={inputErrors['terms']} rules={{ required: true }} />
        </div>

        <PrimaryButton text='Sign up' isLoading={isLoading} />
      </form>

      <LinkBlock text='Already have an account?' linkText='Log in' href='/login' />
    </main>
  )
}

export default SignupView
