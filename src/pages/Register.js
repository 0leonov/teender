import {useForm} from 'react-hook-form';
import {Link, useNavigate} from 'react-router-dom';
import React, {useState} from 'react';
import axios from 'axios';
import styles from '../styles/auth.module.css';
import Input from '../components/Input';

const Register = () => {
  const navigate = useNavigate()

  const {register, handleSubmit, formState: {errors}} = useForm({mode: 'onBlur'});

  const [error, setError] = useState();

  const onSubmit = (data) => {
    axios.post('http://localhost:80/api/user/save', data)
      .then((response) => {
        if (response.data.status === 1) navigate('/');
        else setError(response.data.error);
      })
      .catch((error) => setError(error.message));
  }

  return (
    <div className={styles.content}>
      <Link to='/'>
        <img src={require('../images/logo.webp')} alt='logo'/>
      </Link>

      <h1 className={styles.header}>Sign up to Teender</h1>

      {typeof error != 'undefined' && <div className={styles.errorBlock}>{error}</div>}

      <form onSubmit={handleSubmit(onSubmit)} className='p-6 bg-white flex flex-col gap-4'>
        <Input name='username' type='text' label='Username' register={register} errors={errors.username} rules={{
          required: 'This is a required field',
          minLength: {value: 5, message: 'Cannot be shorter than 5 characters'},
          maxLength: {value: 50, message: 'Cannot be longer than 50 characters'}
        }}/>

        <Input name='email' type='email' label='Email' register={register} errors={errors.email} rules={{
          required: 'This is a required field',
          pattern: {value: /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/g, message: 'Invalid email'},
          maxLength: {value: 50, message: 'Cannot be longer than 5 characters'}
        }}/>

        <Input name='password' type='password' label='Password' register={register} errors={errors.password} rules={{
          required: 'This is a required field',
          minLength: {value: 5, message: 'Cannot be shorter than 5 characters'},
          maxLength: {value: 50, message: 'Cannot be longer than 50 characters'}
        }}/>

        <button type='submit' className={styles.submitButton}>Sign up</button>
      </form>

      <p>Already have an account? <Link to='/login' className={styles.link}>Log in</Link>.</p>
    </div>
  );
};

export default Register;