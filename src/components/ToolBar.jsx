import React from 'react';
import '../scss/toolbar.scss';
import PropTypes from 'prop-types';



function ToolBar(props){
  return(
    <div className='toolbar'>
      <div className='row'>
        <p>
          {props.p}
        </p>
      </div>
    </div>
  );
}

ToolBar.propTypes = {
  p: PropTypes.string
};

export default ToolBar;
