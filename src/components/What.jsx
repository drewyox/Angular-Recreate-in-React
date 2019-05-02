import React from 'react';
import '../scss/what.scss';
import PropTypes from 'prop-types';

function What(props){
  return(
        <div className='whatText'>
          <div className='whatTextCont'>
            <h2>{props.title}</h2>
            <p>{props.text}</p>
          </div>
        </div>
  );
}

What.propTypes = {
  title: PropTypes.title,
  text: PropTypes.text
};

export default What;
