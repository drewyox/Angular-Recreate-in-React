import React from 'react';
import '../scss/header.scss';

function Header() {
  return(
    <div>
      <h1 className='header'>Help Queue</h1>
      <h2 className='subHeader'>Check <span className='subsubHeader'>this</span> out</h2>
    </div>
  );
}

export default Header;
