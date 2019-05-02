import React from 'react';
import PropTypes from 'prop-types';


function ReviewOnPage(props){
  return(
    <div>
      <h1>{props.item}</h1>
      <h4>{props.review}</h4>
      <h5>{props.author}</h5>
    </div>
  );
}

ReviewOnPage.propTypes = {
  item: PropTypes.string,
  review: PropTypes.string,
  author: PropTypes.string
};

export default ReviewOnPage;