import {Link} from "react-router-dom";
import buttons from '../styles/buttons.module.css'

const NotFound = () => {
  return (
    <div className="px-2 h-screen flex flex-col items-center justify-center text-center">
      <p className="font-bold text-purple-600 mb-4">404</p>

      <h1 className="mb-6 text-3xl font-bold text-neutral-800 sm:text-5xl">Page not found</h1>

      <p className="mb-16 text-neutral-400">Sorry, we couldn’t find the page you’re looking for.</p>

      <Link to='/' className={`${buttons.primary} flex justify-between items-center`}>Go back home</Link>
    </div>
  );
};

export default NotFound;