import React from 'react';
import '../scss/blog.scss';
import PropTypes from 'prop-types';



function Blog(props){
  return(
    <div className='blog'>
      <div className='blogDiv'>
        <div className='blogContent'>
          <div className='blogImg'>
          </div>
          <h4>{props.title}</h4>
          <h2>{props.subTitle}</h2>
          <h3>{props.content}</h3>
        </div>
      </div>
    </div>
  );
}

Blog.propTypes = {
  title: PropTypes.string,
  subTitle: PropTypes.string,
  content: PropTypes.string
};

export default Blog;
