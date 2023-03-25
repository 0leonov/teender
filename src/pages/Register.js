import {useForm} from 'react-hook-form';
import {Link} from 'react-router-dom';
import axios from 'axios';
import styles from '../styles/auth.module.css';

const Register = () => {
  const {register, handleSubmit, reset, formState: {errors}} = useForm({mode: 'onBlur'});

  const onSubmit = (data) => {
    axios.post('http://localhost/api/user/save', data)
      .then()
      .catch();
    reset();
  }

  return (
    <div className={styles.wrapper}>
      <Link to='/home' className={styles.logo}>
        <img src={require('../images/logo.webp')} alt='logo'/>
      </Link>

      <h1 className={styles.header}>Sign up to Teender</h1>

      <form onSubmit={handleSubmit(onSubmit)}>
        <div>
          <p>Username</p>
          <input className={errors?.username ? styles.inputError : styles.inputNormal} type='text'
                 {...register('username', {
                   required: 'This is a required field',
                   minLength: {
                     value: 5,
                     message: 'Minimum length 5 characters'
                   }
                 })}/>
          <p className={styles.error}>{errors?.username ? errors.username.message : null}</p>
        </div>

        <div>
          <p>Email</p>
          <input className={errors?.email ? styles.inputError : styles.inputNormal} type='text'
                 {...register('email', {
                   required: 'This is a required field',
                   pattern: {
                     value: /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g,
                     message: 'Invalid email'
                   }
                 })}/>
          <p className={styles.error}>{errors?.email ? errors.email.message : null}</p>
        </div>

        <div>
          <p>Password</p>
          <input className={errors?.password ? styles.inputError : styles.inputNormal} type='password'
                 {...register('password', {
                   required: 'This is a required field',
                   minLength: {
                     value: 8,
                     message: 'Minimum length 8 characters'
                   }
                 })}/>
          <p className={styles.error}>{errors?.password ? errors.password.message : null}</p>
        </div>

        <button type='submit'>Sign up</button>
      </form>

      <div className={styles.secondaryBlock}>
        <p>Already have an account? <Link to='/login' className={styles.link}>Log in</Link>.</p>
      </div>
    </div>
  );
};

export default Register;