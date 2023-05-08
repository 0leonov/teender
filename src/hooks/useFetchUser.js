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

    dispatch(
      setUser({
        token,
        info: {
          name: 'Вика',
          age: '16',
          photo: 'https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg',
          description: 'хочется себе мальчика косплеера (возможно не в подвал), да и чтобы за геншин шарил и подобное.',
        },
      })
    )
    setLoaded(true)
    /*
    instance
      .get('user/get/')
      .then(response => {
        dispatch(setUser({ token, info: response.data }))
      })
      .catch(error => setError(error.message))
      .finally(() => setLoaded(true))
      */
  }, [token])

  return { error, isLoaded }
}
