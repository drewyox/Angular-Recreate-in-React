import React from 'react';
import '../scss/latest.scss';
import LatestContent from './LatestContent'

class Latest extends React.Component{

  constructor(props){
    super(props);
    this.state = {
      // displayLatest: false
    };
    // this.handleClick = this.handleClick.bind(this);
  }

  // handleClick(){
  //   this.setState({displayLatest: true});
  //   console.log('displayLatest is set to:' + this.state.displayLatest);
  // }

  render(){
    return(
      <div>
        <p onClick={this.handleClick}>Click Here to See latest items added!</p>
        <LatestContent/>
      </div>
    );
  }
}

export default Latest;
