import { Link } from 'react-router-dom'

const NotFound = () => {
  return (
    <main className='min-h-screen max-w-xl p-6 flex flex-col mx-auto justify-center text-center items-center prose'>
      <h2 className='text-primary'>404</h2>

      <h1 className='mb-2'>Page not found</h1>

      <p className='mb-16'>Sorry, we couldn’t find the page you’re looking for.</p>

      <Link to='/' className='btn btn-primary no-underline'>
        Go back home
      </Link>
    </main>
  )
}

export default NotFound
