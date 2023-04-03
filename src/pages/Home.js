import {Link} from 'react-router-dom';
import buttons from '../styles/buttons.module.css'

const Home = () => {
  return (
    <div>
      <header className='h-24 container mx-auto flex justify-between items-center border-b border-neutral-200 px-6'>
        <div>
          <Link to='/' className='flex items-center gap-3'>
            <img src={require('../images/logo.webp')} alt='logo' className='h-10 rounded-full'/>
            <h1 className='text-neutral-700 inline align-middle font-bold text-2xl'>Teender</h1>
          </Link>
        </div>
        <div className='flex gap-4'>
          <Link to='/login' className={buttons.secondary}>Log in</Link>
          <Link to='/register' className={buttons.primary}>Sign up</Link>
        </div>
      </header>
    </div>
  );
};

export default Home;