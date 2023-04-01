import {useForm} from 'react-hook-form';
import {useNavigate} from 'react-router-dom';
import React, {useState} from 'react';
import axios from 'axios';
import buttons from '../styles/buttons.module.css'

import Logo from "../components/Auth/Logo";
import Header from "../components/Auth/Header";
import Form from "../components/Auth/Form";
import LinkBlock from "../components/Auth/LinkBlock";
import ErrorBlock from "../components/Auth/ErrorBlock";
import Content from "../components/Auth/Content";
import TextInput from "../components/TextInput";

const Register = () => {
  const navigate = useNavigate()

  const {register, handleSubmit, formState: {errors}} = useForm({mode: 'onBlur'});

  const [error, setError] = useState();

  const onSubmit = (data) => {
    axios.post('http://localhost:80/api/user/save.php', data)
      .then((response) => {
        if (response.data.status === 200) navigate('/');
        else setError(response.data.error);
      })
      .catch((error) => setError(error.message));
  }

  return (
    <Content>
      <Logo/>

      <Header text='Sign up to Teender'/>

      <ErrorBlock error={error}/>

      <Form onSubmit={handleSubmit(onSubmit)}>
        <TextInput name='username' type='text' label='Username' register={register} errors={errors.username} rules={{
          required: 'This is a required field',
          minLength: {value: 5, message: 'Cannot be shorter than 5 characters'},
          maxLength: {value: 50, message: 'Cannot be longer than 50 characters'}
        }}/>

        <TextInput name='email' type='email' label='Email' register={register} errors={errors.email} rules={{
          required: 'This is a required field',
          pattern: {value: /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/g, message: 'Invalid email'},
          maxLength: {value: 50, message: 'Cannot be longer than 5 characters'}
        }}/>

        <TextInput name='password' type='password' label='Password' register={register} errors={errors.password} rules={{
          required: 'This is a required field',
          minLength: {value: 5, message: 'Cannot be shorter than 5 characters'},
          maxLength: {value: 50, message: 'Cannot be longer than 50 characters'}
        }}/>

        <button type='submit' className={buttons.primary}>Sign up</button>
      </Form>

      <LinkBlock text='Already have an account?' linkText='Log in' linkTo='/login'/>
    </Content>
  );
};

export default Register;