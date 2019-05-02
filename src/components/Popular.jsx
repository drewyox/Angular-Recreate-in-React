import React from 'react';
import '../scss/popular.scss';
import PropTypes from 'prop-types';

function Popular(props){
  return(
    <div className="popularItems">
      <p>
        {props.text}
      </p>
    </div>
    
  );
}

Popular.propTypes = {
  text: PropTypes.string
};
export default Popular;