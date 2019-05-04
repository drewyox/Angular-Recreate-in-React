import React from 'react';
import NewReviewForm from './NewReviewForm';
import ReviewOnPage from './ReviewOnPage';
import PropTypes from 'prop-types';

function Review(props){
  return(
    <div>
      <h2>Help us improve! Please write an item review below</h2>
      <NewReviewForm onNewReviewSubmission={props.onNewReviewSubmission}/>
      {props.reviewList.map((response ,index) =>
        <ReviewOnPage  item={response.item}
          review={response.review}
          author={response.author}
          key={index}/>
      )}
    </div>
  );
}

Review.propTypes = {
  reviewList: PropTypes.array,
  onNewReviewSubmission: PropTypes.func
};

export default Review;
