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
    this.handleChangeBack = this.handleChangeBack.bind(this);
  }

  handleChange(){
    this.setState({displayLatest: true});
  }
  handleChangeBack(){
    this.setState({displayLatest: false});
  }

  render(){
    let currentlyVisibleContent = null;
    if (this.state.displayLatest){
      currentlyVisibleContent = <LatestContent
        onChangeBack={this.handleChangeBack}/>;
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
