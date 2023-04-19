import { useSelector } from 'react-redux'

const Profile = () => {
  const selector = useSelector(state => {
    return state.user
  })
  return (
    <div className='text-6xl font-bold text-center'>
      <h1>This is a profile</h1>
      <h2>Id: {selector.id}</h2>
    </div>
  )
}

export default Profile
