import React from 'react';
import Body from './Body';
import Footer from './Footer';
import Header from './Header';
import ToolBar from './ToolBar';

function App(){
  return(
    <div>
      <Header/>
      <ToolBar/>
      <Body/>
      <Footer/>
      <p>Hello World</p>;
    </div>
  );
}

export default App;
