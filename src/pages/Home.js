import {Link} from 'react-router-dom';
import styles from '../styles/Home.module.css';

const Home = () => {
  return (
    <div className={styles.wrapper}>
      <header>
        <Link to={'/'} className={styles.logo}>
          <img src={require('../images/logo.webp')} alt='logo'/>
        </Link>
        <div className={styles.authButtons}>
          <Link to='/login' className={styles.login}>Log in</Link>
          <Link to='/register' className={styles.signup}>Sign up</Link>
        </div>
      </header>
    </div>
  );
};

export default Home;