import {useForm} from 'react-hook-form';
import axios from 'axios';
import SecondaryBlock from "../components/auth/SecondaryBlock";
import ErrorText from "../components/auth/ErrorText";

const Register = () => {
  const {register, handleSubmit, formState: {errors}} = useForm({mode: 'onBlur'});

  const onSubmit = (data) => {
    axios.post('http://localhost/api/user/save', data)
  }

  return (
    <div className='auth__wrapper'>
      <h1 className='auth__header'>Sign up to Teender</h1>

      <form onSubmit={handleSubmit(onSubmit)} className='auth__primary-block'>
        <div>
          <p className='auth__input-field-label'>Email</p>
          <input {...register('email', {
              required: 'This is a required field',
              pattern: {
                value: /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g,
                message: 'Email is invalid'
              }
            }
          )} type='email' className={`${errors?.email ? 'auth__input-field-error' : 'auth__input-field'}`}/>
          <ErrorText>{errors?.email ? `${errors.email.message}` : ''}</ErrorText>
        </div>

        <div>
          <p className='auth__input-field-label'>Username</p>
          <input {...register('username', {
            required: 'This is a required field',
            minLength: {
              value: 5,
              message: 'Use 5 characters or more for password'
            }
          })} type='text' className={`${errors?.username ? 'auth__input-field-error' : 'auth__input-field'}`}/>
          <ErrorText>{errors?.username ? `${errors.username.message}` : ''}</ErrorText>
        </div>

        <div>
          <p className='auth__input-field-label'>Password</p>
          <input {...register('password', {
            required: 'This is a required field',
            minLength: {
              value: 8,
              message: 'Use 8 characters or more for password'
            }
          })} type='password' className={`${errors?.password ? 'auth__input-field-error' : 'auth__input-field'}`}/>
          <ErrorText>{errors?.password ? `${errors.password.message}` : ''}</ErrorText>
        </div>

        <button type='submit' className='primary-button'>Sign up</button>
      </form>
      <SecondaryBlock text='Already have an account? ' linkText='Sign in' linkTo='/login'/>
    </div>
  );
};

export default Register;