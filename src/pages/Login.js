import {useForm} from 'react-hook-form';
import {Link} from 'react-router-dom';
import axios from 'axios';
import styles from '../styles/auth.module.css';

const Login = () => {
  const {register, handleSubmit, reset, formState: {errors}} = useForm({mode: 'onBlur'});

  const onSubmit = (data) => {
    alert(JSON.stringify(data));
    reset();
  }

  return (
    <div className={styles.wrapper}>
      <Link to='/' className={styles.logo}>
        <img src={require('../images/logo.webp')} alt='logo'/>
      </Link>

      <h1 className={styles.header}>Log in to Teender</h1>

      <form onSubmit={handleSubmit(onSubmit)}>
        <div>
          <p>Username</p>
          <input className={errors?.username ? styles.inputError : styles.inputNormal} type='text'
                 {...register('username', {required: 'This is a required field'})}/>
          <p className={styles.error}>{errors?.username ? errors.username.message : null}</p>
        </div>

        <div>
          <p>Password</p>
          <input className={errors?.password ? styles.inputError : styles.inputNormal} type='password'
                 {...register('password', {required: 'This is a required field'})}/>
          <p className={styles.error}>{errors?.password ? errors.password.message : null}</p>
        </div>

        <button type='submit'>Log in</button>
      </form>

      <div className={styles.secondaryBlock}>
        <p>New to Teender? <Link to='/register' className={styles.link}>Create an account</Link>.</p>
      </div>
    </div>
  );
};

export default Login;