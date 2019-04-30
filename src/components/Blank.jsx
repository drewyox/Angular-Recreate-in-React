import React from 'react';
import PropTypes from 'prop-types';

function Blank(){
  return (
    <div>
      <h1>Click here to see latest items</h1>
    </div>
  )
};

Blank.propTypes = {
  onChange: PropTypes.func
};

export default Blank
