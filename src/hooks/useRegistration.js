import { useState } from 'react'
import { signup } from '../services/authService'

const useRegistration = () => {
  const [isLoading, setLoading] = useState(false)
  const [isSuccess, setSuccess] = useState(false)
  const [error, setError] = useState()

  const call = payload => {
    setLoading(true)

    signup(payload)
      .then(response => {
        if (response.data.error) setError(response.data.error)
        else setSuccess(true)
      })
      .catch(error => setError(error.message))
      .finally(() => setLoading(false))
  }

  return { isLoading, isSuccess, error, call }
}

export { useRegistration }
