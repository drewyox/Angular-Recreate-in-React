import React from 'react';
import Body from './Body';
import Header from './Header';
import ToolBar from './ToolBar';
import Footer from './Footer';
import '../scss/app.scss';

function App(){
  return(
    <div>
      <div className='mainContain'>
        <Header/>
        <ToolBar/>
        <Body/>
        <Footer/>
        <p>Hello World</p>
      </div>
    </div>
  );
}

export default App;
