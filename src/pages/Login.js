import {useForm} from 'react-hook-form';
import SecondaryBlock from "../components/auth/SecondaryBlock";
import ErrorText from "../components/auth/ErrorText";

const Login = () => {
  const {register, handleSubmit, reset, formState: {errors}} = useForm({mode: 'onBlur'});

  const onSubmit = (data) => {
    alert(JSON.stringify(data));
    reset();
  }

  return (
    <div className='auth__wrapper'>
      <h1 className='auth__header'>Sign in to Teender</h1>

      <form onSubmit={handleSubmit(onSubmit)} className='auth__primary-block'>
        <div>
          <p className='auth__input-field-label'>Username</p>
          <input {...register('username', {required: 'This is a required field'})} type='text'
                 className={`${errors?.username ? 'auth__input-field-error' : 'auth__input-field'}`}/>
          <ErrorText>{errors?.username ? `${errors.username.message}` : ''}</ErrorText>
        </div>

        <div>
          <p className='auth__input-field-label'>Password</p>
          <input {...register('password', {required: 'This is a required field'})} type='password'
                 className={`${errors?.password ? 'auth__input-field-error' : 'auth__input-field'}`}/>
          <ErrorText>{errors?.password ? `${errors.password.message}` : ''}</ErrorText>
        </div>

        <button type='submit' className='primary-button'>Sign in</button>
      </form>

      <SecondaryBlock text='New to Teender? ' linkText='Create an account' linkTo='/register'/>
    </div>
  );
};

export default Login;
