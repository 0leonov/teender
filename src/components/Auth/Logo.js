import {Link} from "react-router-dom";

const Logo = () => {
  return (
    <Link to='/'>
      <img src={require('../../images/logo.webp')} alt='logo' className='rounded-full shadow w-32 text-center transition hover:ring hover:ring-purple-600'/>
    </Link>
  );
};

export default Logo;