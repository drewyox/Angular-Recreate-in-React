import React from 'react';
import Body from './Body';
import Header from './Header';
import ToolBar from './ToolBar';

function App(){
  return(
    <div>
      <Header/>
      <ToolBar/>
      <Body/>
      
      <p>Hello World</p>
    </div>
  );
}

export default App;
