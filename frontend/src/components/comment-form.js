import React from 'react';
import { connect } from 'react-redux';
import { Field, reduxForm } from 'redux-form';

import { createComment, editComment } from '../actions/comments';

const CommentForm = (props) => {
  const { id, postId, hideForm, handleSubmit, pristine, submitting, createComment, editComment } = props;
  return (
    <div className='content-container-comment'>
      <form className='form' onSubmit={handleSubmit(data => {
          const { author, body } = data;
          data = { author, body };
          if (id) {
            editComment(id, data);
          } else {
            createComment(postId, data);
          }
          hideForm();
        })}>
        <div className='form-field'>
          <label>Author</label>
          <div className='form-field-input'>
            <Field
              name='author'
              component='input'
              type='text'
              placeholder='Enter your name '
            />
          </div>
        </div>
        <div className='form-field'>
          <label>Comment</label>
          <div className='form-field-input'>
            <Field
              name='body'
              component='textarea'
              placeholder='Share comments/feedback here'
            />
          </div>
        </div>
        <div className='form-field'>
          <button type='button' onClick={hideForm}>
            Cancel
          </button>
          <button type='submit' disabled={pristine || submitting}>
            Submit
          </button>
        </div>
      </form>
    </div>
  )
}

export default reduxForm({
  form: 'comment',
  enableReinitialize: true
})(connect(
  undefined,
  { createComment, editComment }
)(CommentForm));