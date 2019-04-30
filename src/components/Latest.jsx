import React from 'react';
import '../scss/latest.scss';
import LatestContent from './LatestContent';
import Blank from './Blank';


class Latest extends React.Component{

  constructor(props){
    super(props);
    this.state = {
      displayLatest: false
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(){
    this.setState({displayLatest: true});
  }

  render(){
    let currentlyVisibleContent = null;
    if (this.state.displayLatest){
      currentlyVisibleContent = <LatestContent/>
    } else {
      currentlyVisibleContent = <Blank onChange={this.handleChange}/>;
    }
    return(
      <div>
        {currentlyVisibleContent}
      </div>
    );
  }
}



export default Latest;
