import React from 'react';
import '../scss/what.scss';
import PropTypes from 'prop-types';

function What(props){
  return(
    <div className='whatText'>
      <div className='whatTextCont'>
        <h2>{props.title1}</h2>
        <p>{props.text1}</p>
      </div>
    </div>
  );
}

What.propTypes = {
  title1: PropTypes.string,
  text1: PropTypes.string
};

export default What;
