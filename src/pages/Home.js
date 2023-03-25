import {Link} from 'react-router-dom';
import styles from '../styles/Home.module.css';

const Home = () => {
  return (
    <div className={styles.wrapper}>
      <header>
        <Link to={'/home'} className={styles.logo}>
          <img src={require('../images/logo.webp')} alt='logo'/>
        </Link>
        <div className={styles.authButtons}>
          <Link to='/login' className={styles.login}>Log in</Link>
          <Link to='/register' className={styles.signup}>Sign up</Link>
        </div>
      </header>

      <div className={styles.a}>
        <div className={styles.block}>
          <h2>Teender</h2>
          <p>
            <span>Teender</span> is a dating site, where finding your perfect match is our top priority!
            Our platform is designed to make it easy and fun for singles to connect and potentially find a long-term partner.
          </p>
          <p>
            Our registration process is simple and straightforward.
            You can create a profile in just a few minutes, where you can upload photos and describe yourself in detail.
          </p>
          <p>
            So, if you're looking for love, friendship, or companionship, join our dating site today and start your journey to finding your perfect match!
          </p>
        </div>
        <div className={styles.block}>
          <h2>Our project</h2>
          <p>
            This website is a demonstration of the skills we have learned.
          </p>
          <p>
            Our team worked collaboratively to come up with a design that we felt was both aesthetically pleasing and user-friendly.
            We utilized various web development tools and programming languages to build this site from scratch.
          </p>
          <p><span>
            Please note that this website is not intended for commercial or promotional purposes, and any information or products displayed on this website are for demonstration purposes only.
            We kindly ask that you refrain from using this website for any purposes other than viewing.
          </span></p>
        </div>
      </div>
    </div>
  );
};

export default Home;