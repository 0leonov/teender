import {Link} from "react-router-dom";

const LinkBlock = ({text, linkText, linkTo}) => {
  return (
    <p className='text-neutral-800'>
      {text} <Link to={linkTo} className='text-purple-600'>{linkText}</Link>.
    </p>
  );
};

export default LinkBlock;