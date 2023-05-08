import { useState } from 'react'

import instance from '@http/index'

export const useFetch = (url, onSuccess) => {
  const [error, setError] = useState(null)
  const [isLoaded, setLoaded] = useState(true)

  const handleCall = payload => {
    setLoaded(false)

    instance
      .post(url, payload)
      .then(response => {
        if (response.data.error) {
          setError(response.data.error)
          return
        }

        onSuccess(response.data)
      })
      .catch(error => setError(error.message))
      .finally(() => setLoaded(true))
  }

  return { error, isLoaded, handleCall }
}
