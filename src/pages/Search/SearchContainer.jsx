import { useNavigate } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { useEffect } from 'react'

import Loading from '@pages/Loading'

import { useFetch } from '@hooks/useFetch'
import MainView from '@pages/Main/MainView'

const MainContainer = () => {
  const navigate = useNavigate()

  const isProfileSetupCompleted = useSelector(state => state.user.isProfileSetupCompleted)

  useEffect(() => {
    if (!isProfileSetupCompleted) {
      navigate('/profile/edit')
    }
  }, [isProfileSetupCompleted])

  const { data, isLoading, error, refresh } = useFetch('user/get/getCouple/')

  if (error) return error

  const handleNext = () => {
    refresh()
  }

  return <MainView {...data} handleNext={handleNext} handleLike={handleNext} isLoading={isLoading} />
}

export default MainContainer
