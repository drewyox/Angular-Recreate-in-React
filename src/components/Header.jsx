import React from 'react';
import '../scss/header.scss';

function Header(){
  return(
    <div className='header'>
      <div className="row">
        <h1>Etsy</h1>
        <form className="search">
          <input type="text" placeholder="Search For Items and Shops"></input>
          <button type="submit">Search</button>
        </form>
        <div className="leftHeader">
          <p>Sell on Etsy</p>
          <p>Register</p>
          <div className="signIn">
            <p>Sign In</p>
          </div>
          <div className="discover">

            <p>Discover</p>
          </div>
          <div className="cart">

            <p>Cart</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
