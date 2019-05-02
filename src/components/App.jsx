import React from 'react';
import Body from './Body';
import Header from './Header';
import ToolBar from './ToolBar';
import Footer from './Footer';
import '../scss/app.scss';

var masterToolList =[
  {
    p: 'Jewelry & Accessories'
  },
  {
    p: 'Clothing & Shoes'
  },
  {
    p: 'Home & Living'
  },
  {
    p: 'Wedding & Party'
  },
  {
    p: 'Toys & Entertainment'
  },
  {
    p: 'Art & Collectibles'
  },
  {
    p: 'Crafts & Supplies'
  },
  {
    p: 'Vintage'
  },
  {
    p: 'Gifts'
  }
];

function App(){
  return(
    <div>
      <div className='mainContain'>
        <Header/>
        <div className='rowB'>
          {masterToolList.map((toolbar, index) =>
            <ToolBar p={toolbar.p}/>
          )}
        </div>
        <Body/>
        <Footer/>
      </div>
    </div>
  );
}

export default App;
