import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom'
import { Provider } from 'react-redux'

import store from './store/store'

import Signup from './pages/Signup'
import Login from './pages/Login'
import NotFound from './pages/NotFound'
import AboutUs from './pages/AboutUs'

import Root from './layouts/Root'

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Root />} errorElement={<NotFound />}>
      <Route index element={<Login />} />
      <Route path='/signup' element={<Signup />} />
      <Route path='/about-us' element={<AboutUs />} />
    </Route>
  )
)

const App = () => {
  return (
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  )
}

export default App
