import './Style.css';
import maleGIF from '../assets/boy.gif';
import girlGIF from '../assets/girl.gif';

import React from 'react';

function Avatar(props) {
  return (
    <div className='avatar'>
      <img
        alt='Image placeholder'
        src={props.gender === 'Male' ? maleGIF : girlGIF}
        className='rounded-circle'
      />
    </div>
  );
}

export default Avatar;
