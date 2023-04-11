import { useNavigate } from 'react-router-dom'
import { useForm } from 'react-hook-form'
import { useState } from 'react'
import axios from 'axios'

import LinkBlock from '../components/auth/LinkBlock'
import ErrorAlert from '../components/ErrorAlert'
import RegisterForm from '../components/auth/RegisterForm'
import Logo from '../components/auth/Logo'

const Register = () => {
  const navigate = useNavigate()

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ mode: 'onBlur' })

  const [error, setError] = useState()

  const onSubmit = data => {
    axios
      .post('http://localhost:80/api/user/save.php', data)
      .then(response => {
        if (response.data.status === 200) navigate('/')
        else setError(response.data.error)
      })
      .catch(error => setError(error.message))
  }

  return (
    <div className='max-w-sm flex min-h-screen flex-col justify-center gap-4 items-center mx-auto p-6 prose'>
      <Logo />

      <h1 className='text-center'>Sign up to Teender</h1>

      {error !== undefined && <ErrorAlert error={error} />}

      <RegisterForm onSubmit={handleSubmit(onSubmit)} register={register} errors={errors} />

      <LinkBlock text='Already have an account?' linkText='Log in' linkTo='/login' />
    </div>
  )
}

export default Register
