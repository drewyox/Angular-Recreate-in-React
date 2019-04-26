import React from 'react';
import Blog from './Blog';
import Latest from './Latest';
import Pictures from './Pictures';
import Popular from './Popular';
import Review from './Review';
import Shop from './Shop';
import What from './What';



function Body(){
  return(
    <div>
      <Blog/>
      <Latest/>
      <Pictures/>
      <Popular/>
      <Review/>
      <Shop/>
      <What/>
    </div>
  );
}

export default Body;
