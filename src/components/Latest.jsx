import React from 'react';
import '../scss/latest.scss';

function Latest(){
  return(
    <div>
      <h1>Browse our Latest Collections!</h1>
      <div className='contain'>
        <div className='conetentLat'>
          <div className='imgStandin'></div>
            <div>
              <p>EDITOR'S PICKS</p>
            <h2>Design ideas and inspiration</h2>
          </div>
        </div>
      <div className='conetentLat'>
        <div className='imgStandin'></div>
          <div>
            <p>EDITOR'S PICKS</p>
            <h2>Jewelry Handbags and accessories</h2>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Latest;