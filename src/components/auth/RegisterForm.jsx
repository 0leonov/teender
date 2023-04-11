import TextInput from '../TextInput'
import Form from '../Form'

const RegisterForm = ({ onSubmit, register, errors }) => {
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
          minLength: {
            value: 5,
            message: 'Cannot be shorter than 5 characters',
          },
          maxLength: {
            value: 50,
            message: 'Cannot be longer than 50 characters',
          },
        }}
      />

      <TextInput
        name='email'
        type='email'
        label='Email'
        register={register}
        error={errors.email}
        rules={{
          required: 'This is a required field',
          pattern: {
            value: /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/g,
            message: 'Invalid email',
          },
          maxLength: {
            value: 50,
            message: 'Cannot be longer than 5 characters',
          },
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
          minLength: {
            value: 5,
            message: 'Cannot be shorter than 5 characters',
          },
          maxLength: {
            value: 50,
            message: 'Cannot be longer than 50 characters',
          },
        }}
      />

      <button type='submit' className='btn btn-primary'>
        Sign up
      </button>
    </Form>
  )
}

export default RegisterForm
