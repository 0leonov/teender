import { useNavigate } from 'react-router-dom'
import { useForm } from 'react-hook-form'
import { useState } from 'react'
import axios from 'axios'

import LinkBlock from '../components/auth/LinkBlock'
import ErrorAlert from '../components/ErrorAlert'
import LoginForm from '../components/auth/LoginForm'
import Logo from '../components/auth/Logo'

const Login = () => {
  const [error, setError] = useState()

  const navigate = useNavigate()

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ mode: 'onBlur' })

  const onSubmit = data => {
    axios
      .post('http://localhost:80/api/user/login.php', data)
      .then(response => {
        if (response.data.status === 200) navigate('/')
        else setError(response.data.error)
      })
      .catch(error => setError(error.message))
  }

  return (
    <div className='max-w-sm flex min-h-screen flex-col justify-center gap-4 items-center mx-auto p-6 prose'>
      <Logo />

      <h1 className='text-center'>Log in to Teender</h1>

      {error !== undefined && <ErrorAlert error={error} />}

      <LoginForm onSubmit={handleSubmit(onSubmit)} register={register} errors={errors} />

      <LinkBlock text='New to Teender?' linkText='Create an account' linkTo='/register' />
    </div>
  )
}
export default Login
