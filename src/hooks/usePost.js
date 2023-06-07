import { useState } from 'react'

import instance from '@http/index'

const usePost = (url, onSuccess) => {
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState(null)

  const handleCall = async request => {
    setIsLoading(true)

    try {
      const response = await instance.post(url, request)
      setError(null)
      onSuccess(response.data)
    } catch (error) {
      const expectedError = error.response.data.error
      setError(expectedError ? expectedError : error.message)
    } finally {
      setIsLoading(false)
    }
  }

  return { isLoading, error, handleCall }
}

export default usePost
