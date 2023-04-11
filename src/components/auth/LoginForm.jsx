import TextInput from '../TextInput'
import Form from '../Form'

const LoginForm = ({ onSubmit, register, errors }) => {
  return (
    <Form onSubmit={onSubmit}>
      <TextInput
        name='username'
        type='text'
        label='Username'
        register={register}
        error={errors.username}
        rules={{
          required: 'This is a required field',
        }}
      />

      <TextInput
        name='password'
        type='password'
        label='Password'
        register={register}
        error={errors.password}
        rules={{
          required: 'This is a required field',
        }}
      />

      <button type='submit' className='btn btn-primary'>
        Sign up
      </button>
    </Form>
  )
}

export default LoginForm
