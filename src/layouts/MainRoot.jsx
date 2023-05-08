import { Outlet } from 'react-router-dom'

import Navigation from '@layouts/Navigation'
import { useFetchUser } from '@hooks/useFetchUser'

const MainRoot = () => {
  const { error, isLoaded } = useFetchUser()

  if (!isLoaded) return <></>
  if (error) return <div>{error}</div>

  return (
    <div className='min-h-screen flex grow'>
      <Navigation />
      <Outlet />
    </div>
  )
}

export default MainRoot
