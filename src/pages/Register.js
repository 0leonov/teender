import {useForm} from 'react-hook-form';
import SecondaryBlock from "../components/auth/SecondaryBlock";

const Register = () => {
  const {register, handleSubmit, formState: {errors}} = useForm();

  const onSubmit = (data) => {
    alert(JSON.stringify(data));
  }

  return (
    <div className='auth__wrapper'>
      <h1 className='auth__header'>Sign up to Teender</h1>
      <form onSubmit={handleSubmit(onSubmit)} className='auth__primary-block'>
        <div>
          <p className='auth__input-field-label'>Email</p>
          <input {...register('email', {required: true})} type='email' className='auth__input-field'/>
        </div>
        <div>
          <p className='auth__input-field-label'>Username</p>
          <input {...register('username', {required: true})} type='text' className='auth__input-field'/>
        </div>
        <div>
          <p className='auth__input-field-label'>Password</p>
          <input {...register('password', {required: true})} type='password' className='auth__input-field'/>
        </div>
        <button type='submit' className='primary-button'>Sign up</button>
      </form>
      <SecondaryBlock text='Already have an account? ' linkText='Sign in' linkTo='/login'/>
    </div>
  );
};

export default Register;