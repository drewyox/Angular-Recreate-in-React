import React from 'react';
import PropTypes from 'prop-types';

function Blank(props){
  return (
    <div>
      <h1 onClick={props.onChange}>Click here to see latest items</h1>
    </div>
  )
};

Blank.propTypes = {
  onChange: PropTypes.func
};

export default Blank
