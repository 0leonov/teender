import { useState, useEffect } from 'react'

import instance from '@http/index'

export const useFetch = (url) => {
  const [data, setData] = useState(null)
  const [isLoaded, setLoaded] = useState(false)
  const [error, setError] = useState(null)
  const [reload, setReload] = useState(true)

  useEffect(() => {
    setLoaded(false)

    instance.get(url)
      .then(response => {
        if (response.data.error) {
          setError(response.data.error)
          return
        }

        setData(response.data)
      })
      .catch(error => setError(error.message))
      .finally(() => setLoaded(true))
  }, [url, reload])

  const refresh = () => {
    setReload(!reload)
  }

  return { data, isLoaded, error, refresh }
}
