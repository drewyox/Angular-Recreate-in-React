import React from 'react';
import '../scss/shop.scss';
import PropTypes from 'prop-types';

function Shop(props){
  return(
    <div>
      <div className='containShop'>
        <div className='conetentShop'>
          <div className='imgStandinShop'></div>
          <div>
            <p>{props.category}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

Shop.propTypes = {
  category: PropTypes.string
};

export default Shop;