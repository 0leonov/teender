import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom'
import { useDispatch } from 'react-redux'

import Signup from './pages/Signup'
import Login from './pages/Login'
import NotFound from './pages/NotFound'
import AboutUs from './pages/AboutUs'
import Profile from './pages/Profile'

import Root from './layouts/Root'
import { setUser } from './store/slices/userSlice'
import { useEffect } from 'react'

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route errorElement={<NotFound />}>
      <Route path='/' element={<Root />}>
        <Route index element={<Login />} />
        <Route path='signup' element={<Signup />} />
        <Route path='about-us' element={<AboutUs />} />
        <Route path='profile' element={<Profile />} />
      </Route>
    </Route>
  )
)

const App = () => {
  const dispatch = useDispatch()

  useEffect(() => {
    const token = localStorage.getItem('access_token')

    if (token) dispatch(setUser(token))
  }, [dispatch])

  return <RouterProvider router={router} />
}

export default App
