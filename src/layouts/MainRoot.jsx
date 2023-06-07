import { Outlet, useLocation, useNavigate } from 'react-router-dom'
import { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'

import Navbar from '@layouts/Navbar'
import Footer from '@layouts/Footer'

import { removeUser, setUser } from '@slices/userSlice'

import Loading from '@pages/Loading'
import instance from '@http'

const MainRoot = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const location = useLocation()

  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState()

  useEffect(() => {
    instance
      .get('users/get')
      .then(response => {
        dispatch(setUser({ info: response.data }))
      })
      .catch(error => {
        setError(error)
        dispatch(removeUser())
        navigate('/login')
      })
      .finally(() => setIsLoading(false))
  }, [location])

  if (isLoading) return <Loading />

  if (error) return <div>Error: {error}</div>

  return (
    <div className='min-h-screen flex flex-col items-center'>
      <Navbar />

      <main className='grow w-full max-w-xl p-4'>
        <Outlet />
      </main>

      <Footer />
    </div>
  )
}

export default MainRoot
