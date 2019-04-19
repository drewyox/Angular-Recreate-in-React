import React from 'react';
import '../scss/shop.scss';

function Shop(){
  return(
    <div>
      <div className='containShop'>
        <div className='conetentShop'>
          <div className='imgStandinShop'></div>
          <div>
            <p>DIY craft projects</p>
          </div>
        </div>
        <div className='conetentShop'>
          <div className='imgStandinShop'></div>
          <div>
            <p>Jewelry gifts under $30</p>
          </div>
        </div>
        <div className='conetentShop'>
          <div className='imgStandinShop'></div>
          <div>
            <p>Vintage clothing</p>
          </div>
        </div>
        <div className='conetentShop'>
          <div className='imgStandinShop'></div>
          <div>
            <p>Etsy weddings</p>
          </div>
        </div>
        <div className='conetentShop'>
          <div className='imgStandinShop'></div>
          <div>
            <p>One of a kind gift ideas</p>
          </div>
        </div>
        <div className='conetentShop'>
          <div className='imgStandinShop'></div>
          <div>
            <p>EDITOR'S PICKS</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Shop;