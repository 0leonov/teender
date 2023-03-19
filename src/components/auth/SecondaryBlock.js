import React from 'react';
import {Link} from "react-router-dom";

const SecondaryBlock = (props) => {
  if (props?.children)
    return <p></p>;

  return (
    <div className='auth__secondary-block'>
      <p className='auth__secondary-block__text'>
        {props.text}<Link to={props.linkTo} className='text-blue-400'>{props.linkText}</Link>.
      </p>
    </div>
  );
};

export default SecondaryBlock;