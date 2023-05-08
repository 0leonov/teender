import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { useSelector } from 'react-redux'

import ProtectedRoute from '@routes/ProtectedRoute'

import AuthRoot from '@layouts/AuthRoot'
import MainRoot from '@layouts/MainRoot'

import Signup from '@pages/Signup'
import Login from '@pages/Login'
import NotFound from '@pages/NotFound'
import Profile from '@pages/Profile'
import Main from '@pages/Main'
import Direct from '@pages/Direct'

import { useFetchUser } from '@hooks/useFetchUser'

const App = () => {
  const isAuthenticated = useSelector(state => state.user.isAuthenticated)
  const { error, isLoaded } = useFetchUser()

  if (!isLoaded) return

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
          <Route path='/direct' element={<Direct />} />
        </Route>

        <Route path='*' element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
