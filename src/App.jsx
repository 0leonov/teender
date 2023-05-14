import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'

import ProtectedRoute from '@routes/ProtectedRoute'

import AuthRoot from '@layouts/AuthRoot'
import MainRoot from '@layouts/MainRoot'

import Signup from '@pages/Signup'
import Login from '@pages/Login'
import NotFound from '@pages/NotFound'
import Profile from '@pages/Profile'
import Main from '@pages/Main'
import Direct from '@pages/Direct'
import ProfileEdit from '@pages/ProfileEdit'

import { useFetchUser } from '@hooks/useFetchUser'

import { setTheme } from '@slices/themeSlice'

const App = () => {
  const isAuthenticated = useSelector(state => state.user.isAuthenticated)

  const dispatch = useDispatch()

  const { error, isLoaded } = useFetchUser()

  if (error) return error
  if (!isLoaded) return

  const savedTheme = localStorage.getItem('theme') || 'light'
  dispatch(setTheme(savedTheme))

  return (
    <BrowserRouter>
      <Routes>
        <Route element={<ProtectedRoute allowed={!isAuthenticated} fallbackPath='/' element={<AuthRoot />} />}>
          <Route path='/login' element={<Login />} />
          <Route path='/signup' element={<Signup />} />
        </Route>

        <Route element={<ProtectedRoute allowed={isAuthenticated} fallbackPath='/login' element={<MainRoot />} />}>
          <Route path='/' element={<Main />} />
          <Route path='/profile' element={<Profile />} />
          <Route path='/profile/edit' element={<ProfileEdit />} />
          <Route path='/direct' element={<Direct />} />
        </Route>

        <Route path='*' element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
