import {useForm} from 'react-hook-form';
import React from "react";
import buttons from '../styles/buttons.module.css'

import Logo from "../components/Auth/Logo";
import Header from "../components/Auth/Header";
import Form from "../components/Auth/Form";
import LinkBlock from "../components/Auth/LinkBlock";
import Content from "../components/Auth/Content";
import TextInput from "../components/TextInput";

const Login = () => {
  const {register, handleSubmit, reset, formState: {errors}} = useForm({mode: 'onBlur'});

  const onSubmit = (data) => {
    alert(JSON.stringify(data));
    reset();
  }

  return (
    <Content>
      <Logo/>

      <Header text='Log in to Teender'/>

      <Form onSubmit={handleSubmit(onSubmit)}>
        <TextInput name='username' type='text' label='Username' register={register} errors={errors.username} rules={{required: 'This is a required field'}}/>

        <TextInput name='password' type='password' label='Password' register={register} errors={errors.password} rules={{required: 'This is a required field'}}/>

        <button type='submit' className={buttons.primary}>Log in</button>
      </Form>

      <LinkBlock text='New to Teender?' linkText='Create an account' linkTo='/register'/>
    </Content>
  );
};

export default Login;