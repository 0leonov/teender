import {useForm} from 'react-hook-form';
import SecondaryBlock from "../components/auth/SecondaryBlock";

const Login = () => {
  const {register, handleSubmit} = useForm();

  const onSubmit = (data) => {
    alert(JSON.stringify(data));
  }

  return (
    <div className='auth__wrapper'>
      <h1 className='auth__header'>Sign in to Teender</h1>
      <form onSubmit={handleSubmit(onSubmit)} className='auth__primary-block'>
        <div>
          <p className='auth__input-field-label'>Username</p>
          <input {...register('username', {required: true})} type='text' className='auth__input-field'/>
        </div>
        <div>
          <p className='auth__input-field-label'>Password</p>
          <input {...register('password', {required: true})} type='password' className='auth__input-field'/>
        </div>
        <button type='submit' className='primary-button'>Sign in</button>
      </form>
      <SecondaryBlock text='New to Teender? ' linkText='Create an account' linkTo='/register'/>
    </div>
  );
};

export default Login;
