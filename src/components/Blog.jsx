import React from 'react';
import '../scss/blog.scss';


function Blog(){
  return(
    <div>
      <h2>Fresh From the Blog<span className='smallTitle'>Read the Blog</span></h2>
      <div className='blogDiv'>

        <div className='blogContent'>
          <div className='blogImg'>
          </div>
          <h4>FEATURED SHOPS</h4>
          <h2>Handmade Wooden Utensils From Belaya Hvoya</h2>
          <h3>Elevate your kitchen essentials with hand-carved spoons and stylish serveware you won’t want to hide away in a cabinet.</h3>
        </div>

        <div className='blogContent'>
          <div className='blogImg'>
          </div>
          <h4>SHOPPING GUIDES</h4>
          <h2>7 Bold Decor Trends to Make Your Own</h2>
          <h3>Get ready to shake things up: This season’s signature decorating styles are chock full of vibrant colors and playful patterns.</h3>
        </div>

        <div className='blogContent'>
          <div className='blogImg'>
          </div>
          <h4>INSPIRATION</h4>
          <h2>5-Star Buys: A Handmade Map of a Favorite Place</h2>
          <h3>Behold, your shortcut to an unforgettable gift.</h3>
        </div>
      </div>
    </div>
  );
}

export default Blog;