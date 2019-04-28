import React from 'react';
import '../scss/latest.scss';

class Latest extends React.Component{
  
  constructor(props){
    super(props);
    this.state = {
      displayLatest: false
    };
  }

  handleClick(){
    console.log('What is up my dude');
  }

  render(){
    return(
      <div>
      <p onClick={this.handleClick}>Click Here to See latest items added!</p>
        <h1>Browse our Latest Collections!</h1>
        <div className='contain'>
          <div className='conetentLat'>
            <div className='imgStandin'></div>
              <div>
                <p>EDITOR'S PICKS</p>
              <h2>Design ideas and inspiration</h2>
            </div>
          </div>
        <div className='conetentLat'>
          <div className='imgStandin'></div>
            <div>
              <p>EDITOR'S PICKS</p>
              <h2>Jewelry Handbags and accessories</h2>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Latest;
