import React from 'react';
import PropTypes from 'prop-types';




function NewReviewForm(props) {
  let _item = null;
  let _review = null;
  let _author = null;
  
  function handleSubmission(event){
    event.preventDefault();
    props.onNewReviewSubmission({item: _item.value, review: _review.value, author: _author.value});
    _item.value = '';
    _review.value = '';
    _author.value = '';
  }
  
  return(
    <div>
      <form onSubmit={handleSubmission}>
        <input
          type='text'
          id='item'
          placeholder='Which Item?'
          ref={(input) => {_item = input;}}/>
        <input
          type='text'
          id='review'
          placeholder='Please write your review here'
          ref={(input) => {_review = input;}}/>
        <input
          type='text'
          id='author'
          placeholder='Your Name'
          ref={(input) => {_author = input;}}/>
        <button type='submit'>Submit your review</button>
      </form>
    </div>
        
        
    
  );
}

NewReviewForm.propTypes = {
  onNewReviewSubmission: PropTypes.func
};

export default NewReviewForm;