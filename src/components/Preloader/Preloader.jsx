import React from 'react';
import scss from './Preloader.module.scss';

import preloader from '../../img/Preloader.svg';

function Preloader() {
  return (
    <div>
      <img src={preloader} alt="preloader" className={scss.preloader} />
    </div>
  );
}

export default Preloader;
