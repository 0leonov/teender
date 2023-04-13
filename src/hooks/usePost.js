import { useState } from 'react'
import axios from 'axios'

const usePost = (url, successCallback) => {
  const [isLoading, setLoading] = useState(false)
  const [error, setError] = useState()

  const call = payload => {
    setLoading(true)

    axios
      .post(url, payload)
      .then(response => {
        debugger
        if (response.data.status === 200) successCallback()
        else setError(response.data.error)
      })
      .catch(error => setError(error.message))
      .finally(() => setLoading(false))
  }

  return { isLoading, error, call }
}

export { usePost }
