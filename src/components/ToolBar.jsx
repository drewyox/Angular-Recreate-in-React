import React from 'react';
import '../scss/toolbar.scss';

function ToolBar(){
  return(
    <div>
      <div className='row'>
        <p id='jewels'>
          Jewelry & Accessories
        </p>
        <p id='clothing'>
          CLothing & Shoes
        </p>
        <p id='home'>
          Home & Living
        </p>
        <p id='wedding'>
          Wedding & Party
        </p>
        <p id='toys'>
          Toys & Entertainment
        </p>
        <p id='art'>
          Art & Collectibles
        </p>
        <p id='crafts'>
          Crafts & Supplies
        </p>
        <p id='vintage'>
          Vintage
        </p>
        <div id='gifts'>
          <p>
            Gifts
          </p>
        </div>
      </div>
      <p>ToolBar Section Working</p>
    </div>
  );
}

export default ToolBar;