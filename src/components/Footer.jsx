import React from 'react';
import '../scss/footer.scss';

function Footer(){
  return(
    <div className='footer'>
      <div className='footerDiv'>
        <div className='topFooter'>
          <p>Cooooonnnnttteeennntt</p>
        </div>
        <div className='columnContainer'>
          <div className='column'>
            <ul>
              <li><strong>Shop</strong></li>
              <li>Gift Cards</li>
              <li>Etsy Blog</li>
            </ul>
          </div>
          <div className='column'>
            <ul>
              <li><strong>Sell</strong></li>
              <li>Sell On Etsy</li>
              <li>Teams</li>
              <li>Forums</li>
            </ul>
          </div>
          <div className='column'>
            <ul>
              <li><strong>About</strong></li>
              <li>Etsy, Inc.</li>
              <li>Policies</li>
              <li>Investors</li>
              <li>Careers</li>
              <li>Press</li>
              <li>Impact</li>
            </ul>
          </div>
          <div className='column'>
            <ul>
              <li><strong>Follow Etsy</strong></li>
              <li>Facebook</li>
              <li>Instagram</li>
              <li>Pintrest</li>
              <li>Twitter</li>
            </ul>
          </div>
        </div>
        <div className='help'>
          <p>Need Help? Visit the Help Center.</p>
          <p>United States | English (US) | $(USD)</p>
        </div>
        <div className='bottom'>
          <div className='leftBottom'>
            <h1>Etsy</h1>
            <p>We make it easy to find your thing</p>
          </div>
          <div className='rightBottom'>
            <p>2019 Etsy, Inc.</p>
            <p>Terms of Use</p>
            <p>Privacy</p>
            <p>Interest-based ads</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
