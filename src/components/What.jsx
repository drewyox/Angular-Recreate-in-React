import React from 'react';
import '../scss/what.scss';

function What(){
  return(
    <div className='what'>
      <div className='container'>
        <div className='headWhat'>
          <h1> What Is Etsy?</h1>
          <a>Read our wonderful weird story</a>
        </div>
        <div className='whatText'>
          <div className='whatTextCont'>
            <h2>A one-of-a-kind community</h2>
            <p>Etsy is a global online marketplace, where people come together to make, sell, buy, and collect unique items.</p>
          </div>

          <div className='whatTextCont'>
            <h2>Support independent creators</h2>
            <p>There’s no Etsy warehouse – just millions of people selling the things they love. We make the whole process easy, helping you connect directly with makers to find something extraordinary.</p>
          </div>

          <div className='whatTextCont'>
            <h2>Peace of mind</h2>
            <p>Your privacy is the highest priority of our dedicated team. And if you ever need assistance, we are always ready to step in for support.</p>
          </div>
        </div>
        <div className="bottomWhat">
          <p className='pTag'>Have a question? Well, we’ve got some answers.</p>
          <button type='submit'>Go to Help Center</button>
        </div>
      </div>
    </div>
  );
}

export default What;
