import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { Field, reduxForm } from 'redux-form';

import { capitalizeFirst } from '../utils/helper';
import { createPost, editPost } from '../actions/posts';

const PostForm = (props) => {
  const { handleSubmit, pristine, submitting, categories,
    createPost, editPost, history, match } = props;
  const isEdit = match.url.indexOf('edit') !== -1;
  return (
    <form className='form' onSubmit={handleSubmit(data => {
      const { title, body, category = categories[0].name, author } = data;
      data = { title, body, category, author };
      if(isEdit) {
        editPost(match.params.id, data);
      } else {
        createPost(data);
      }
      history.goBack();
      })}
    >
      <div className='form-field'>
        <label>Title</label>
        <div className='form-field-input'>
          <Field
            name='title'
            component='input'
            type='text'
            placeholder='Enter title'
          />
        </div>
      </div>
      <div className='form-field'>
        <label>Author</label>
        <div className='form-field-input'>
          <Field
            name='author'
            component='input'
            type='text'
            placeholder='Enter your name'
          />
        </div>
      </div>
      <div className='form-field'>
        <label>Category</label>
        <div className='form-field-input'>
          <Field name='category' component='select'>
            {categories.map((category, index) => 
              <option key={index} value={category.name}>{capitalizeFirst(category.name)}</option>
            )}
          </Field>
        </div>
      </div>
      <div className='form-field'>
        <label>Body</label>
        <div className='form-field-input'>
          <Field
            name='body'
            component='textarea'
            placeholder='Add post info here'
          />
        </div>
      </div>
      <div className='form-field'>
        <button type='button' onClick={() => history.goBack()}>
          Back
        </button>
        <button type='submit' disabled={pristine || submitting}>
          Submit
        </button>
      </div>
    </form>
  )
}

const mapStateToProps = ({ categories }) => ({
  categories
})

export default reduxForm({ 
  form: 'post'
})(withRouter(connect(mapStateToProps,
  { createPost, editPost }
)(PostForm)));