import { useState, useEffect } from 'react'

import instance from '@http/index'

export const useFetch = url => {
  const [data, setData] = useState(null)
  const [isLoading, setLoading] = useState(true)
  const [error, setError] = useState(null)
  const [reload, setReload] = useState(true)

  useEffect(() => {
    setLoading(true)

    instance
      .get(url)
      .then(response => {
        if (response.data.error) {
          setError(response.data.error)
          return
        }

        setData(response.data)
      })
      .catch(error => setError(error.message))
      .finally(() => setLoading(false))
  }, [url, reload])

  const refresh = () => {
    setReload(!reload)
  }

  return { data, isLoading, error, refresh }
}
