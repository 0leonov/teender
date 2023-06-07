import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { useEffect } from 'react'

import { useFetch } from '@hooks/useFetch'

import SearchView from '@pages/Search/SearchView'

import instance from '@http'

const SearchContainer = () => {
  const navigate = useNavigate()

  const isProfileSetupCompleted = useSelector(state => state.user.isProfileSetupCompleted)

  useEffect(() => {
    if (!isProfileSetupCompleted) navigate('/profile/edit')
  }, [isProfileSetupCompleted])

  const { data, isLoading, error, refresh } = useFetch('user/getCouple')

  if (error) return error

  const handleNext = () => {
    refresh()
  }

  const handleLike = () => {
    instance.post('/users/like', { id: data.id })
    handleNext()
  }

  return <SearchView {...data} handleNext={handleNext} handleLike={handleLike} isLoading={isLoading} />
}

export default SearchContainer
