import { useState } from 'react'
import instance from '../http'

const useAxios = (url, callback) => {
  const [isLoading, setLoading] = useState(false)
  const [error, setError] = useState()

  const call = payload => {
    setLoading(true)

    instance
      .post(url, payload)
      .then(response => {
        if (response.data.error) setError(response.data.error)
        else callback(response.data)
      })
      .catch(error => setError(error.message))
      .finally(() => setLoading(false))
  }

  return { isLoading, error, call }
}

export { useAxios }
