import { useState, useEffect } from 'react'
import { useDispatch } from 'react-redux'

import instance from '@http'
import { setUser } from '@slices/userSlice'

export const useFetchUser = () => {
  const dispatch = useDispatch()

  const [error, setError] = useState(null)
  const [isLoaded, setLoaded] = useState(false)

  const token = localStorage.getItem('token')

  useEffect(() => {
    if (!token) {
      setLoaded(true)
      return
    }

    instance
      .get('user/get/')
      .then(response => {
        dispatch(setUser({ token, info: response.data }))
        setLoaded(true)
      })
      .catch(error => setError(error.message))
      .finally(() => setLoaded(true))
  }, [token])

  return { error, isLoaded }
}
