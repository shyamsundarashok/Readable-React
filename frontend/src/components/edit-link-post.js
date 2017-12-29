import React from 'react';
import { Link } from 'react-router-dom';

import { CONTENT_POSTS } from '../actions/constants';
import EditLink from './edit-link';

const EditLinkPost = ({ id }) => (
  <EditLink>
    <Link to={`/${CONTENT_POSTS}/${id}/edit`} >
      <span>Edit</span>
    </Link>
  </EditLink>
)

export default EditLinkPost;