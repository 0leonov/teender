import {useForm} from 'react-hook-form';
import {useNavigate} from 'react-router-dom';
import React, {useState} from "react";
import axios from 'axios';
import buttons from '../styles/buttons.module.css'

import Logo from '../components/Auth/Logo';
import Header from '../components/Auth/Header';
import Form from '../components/Auth/Form';
import LinkBlock from '../components/Auth/LinkBlock';
import Content from '../components/Auth/Content';
import TextInput from '../components/TextInput';
import Checkbox from '../components/Auth/Checkbox';

const Login = () => {
  const navigate = useNavigate()

  const {register, handleSubmit, formState: {errors}} = useForm({mode: 'onBlur'});

  const [error, setError] = useState();

  const onSubmit = (data) => {
    axios.post('http://localhost:80/api/user/login.php', data)
      .then((response) => {
        if (response.data.status === 200) navigate('/');
        else setError(response.data.error);
      })
      .catch((error) => setError(error.message));
  }

  return (
    <Content>
      <Logo/>

      <Header text='Log in to Teender'/>

      <Form onSubmit={handleSubmit(onSubmit)}>
        <TextInput name='username' type='text' label='Username' register={register} errors={errors.username} rules={{required: 'This is a required field'}}/>

        <TextInput name='password' type='password' label='Password' register={register} errors={errors.password} rules={{required: 'This is a required field'}}/>


        <Checkbox label='Remember me'/>

        <button type='submit' className={buttons.primary}>Log in</button>
      </Form>

      <LinkBlock text='New to Teender?' linkText='Create an account' linkTo='/register'/>
    </Content>
  );
};

export default Login;