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
      <div className='absolute h-screen w-screen bg-base-200 left-0 top-0 -z-10'>
        <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1440 320' className='relative bg-base-100 fill-base-200'>
          <path d='M0,256L48,240C96,224,192,192,288,181.3C384,171,480,181,576,197.3C672,213,768,235,864,250.7C960,267,1056,277,1152,288C1248,299,1344,309,1392,314.7L1440,320L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z'></path>
        </svg>
      </div>

      <Navbar />

      <main className='grow w-full max-w-xl p-4'>
        <Outlet />
      </main>

      <Footer />
    </div>
  )
}

export default MainRoot
