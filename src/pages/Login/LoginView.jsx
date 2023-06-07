import TextInput from '@components/TextInput'
import LinkBlock from '@components/auth/LinkBlock'
import Alert from '@components/auth/Alert'
import PrimaryButton from '@components/PrimaryButton'

const LoginView = ({ error, isLoading, register, handleSubmit, inputErrors }) => {
  const inputProps = [
    {
      label: 'Username',
      id: 'username',
      rules: { required: 'Required' },
    },
    {
      label: 'Password',
      id: 'password',
      type: 'password',
      rules: { required: 'Required' },
    },
  ]

  return (
    <main className='max-w-sm w-full flex flex-col gap-8'>
      <h1 className='text-4xl font-bold'>Login</h1>

      <form className='form-control gap-4' onSubmit={handleSubmit}>
        {error && <Alert text={error} />}

        <div className='form-control gap-2'>
          {inputProps.map(props => (
            <TextInput key={props.id} register={register} {...props} error={inputErrors[props.id]?.message} />
          ))}
        </div>

        <PrimaryButton text='Login' isLoading={isLoading} />
      </form>

      <LinkBlock text='New to teender?' linkText='Sign up' href='/signup' />
    </main>
  )
}

export default LoginView
