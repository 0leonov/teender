import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { useEffect } from 'react'

import AuthRoot from '@layouts/AuthRoot'
import MainRoot from '@layouts/MainRoot'

import SignupContainer from '@pages/Signup/SignupContainer'
import Login from '@pages/Login/LoginContainer'
import NotFound from '@pages/NotFound'
import Profile from '@pages/Profile'
import SearchContainer from '@pages/Search/SearchContainer'
import Direct from '@pages/Direct'
import ProfileEdit from '@pages/ProfileEdit'

import { setTheme } from '@slices/themeSlice'
import Terms from '@pages/Terms'

const App = () => {
  const dispatch = useDispatch()

  useEffect(() => {
    const theme = setTheme(localStorage.getItem('theme') || 'light')
    dispatch(theme)
  }, [dispatch])

  return (
    <BrowserRouter>
      <Routes>
        <Route element={<AuthRoot />}>
          <Route path='/login' element={<Login />} />
          <Route path='/signup' element={<SignupContainer />} />
        </Route>

        <Route element={<MainRoot />}>
          <Route path='/' element={<SearchContainer />} />
          <Route path='/profile' element={<Profile />} />
          <Route path='/profile/edit' element={<ProfileEdit />} />
          <Route path='/direct' element={<Direct />} />
        </Route>

        <Route path='/terms' element={<Terms />} />

        <Route path='*' element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
