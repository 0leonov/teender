import { useEffect, useState } from 'react'

import Liked from '@components/direct/Liked'
import Match from '@components/direct/Match'

import Loading from '@pages/Loading'

import instance from '@http/index'

const Direct = () => {
  const [toggle, setToggle] = useState(false)

  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState('')
  const [data, setData] = useState({})

  const refresh = () => {
    setToggle(prev => !prev)
  }

  useEffect(() => {
    setIsLoading(true)

    Promise.all([instance.get('/users/getDirect'), instance.get('/users/getMatches')])
      .then(response => setData([response[0].data, response[1].data]))
      .catch(error => setError(error))
      .finally(() => setIsLoading(false))
  }, [toggle])

  const handleLike = id => {
    instance.post('/users/like', { id })
    refresh()
  }

  const handleIgnore = id => {
    instance.post('/users/ignore', { id })
    refresh()
  }

  if (isLoading) return <Loading />
  if (error) return error

  return (
    <main className='flex flex-col gap-8'>
      <div>
        <h2 className='text-2xl font-bold mb-4'>You liked</h2>
        <div className='flex flex-col gap-2'>{data[0] !== '    ' ? data[0].map(data => <Liked {...data} handleIgnore={handleIgnore} handleLike={handleLike} />) : <div>Not Found</div>}</div>
      </div>

      <div>
        <h2 className='text-2xl font-bold mb-4'>Matches</h2>
        <div className='flex flex-col gap-2'>{data[1] !== '    ' ? data[1].map(data => <Match {...data} />) : <div>Not Found</div>}</div>
      </div>
    </main>
  )
}

export default Direct
