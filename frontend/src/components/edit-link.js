import React from 'react';
import FaEdit from 'react-icons/lib/fa/edit';

import WhiteSpace from './white-space';

const EditLink = ({ children }) => (
  <div className='content-control-item'>
    <FaEdit />
    <WhiteSpace />
    { children }
  </div>
)

export default EditLink;