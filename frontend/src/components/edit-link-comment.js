import React from 'react';

import EditLink from './edit-link';

const EditLinkComment = ({ showForm }) => (
  <EditLink>
    <a className='fake-link' onClick={showForm}>Edit</a>
  </EditLink>
)

export default EditLinkComment;