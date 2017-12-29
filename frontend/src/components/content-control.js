import React from 'react';
import { connect } from 'react-redux';
import { Link, withRouter } from 'react-router-dom';
import FaCommentO from 'react-icons/lib/fa/comment-o';
import FaTrashO from 'react-icons/lib/fa/trash-o';

import EditLinkPost from './edit-link-post';
import EditLinkComment from './edit-link-comment';
import { deletePost } from '../actions/posts';
import { deleteComment } from '../actions/comments';
import WhiteSpace from './white-space';
import { CONTENT_POSTS, CONTENT_COMMENTS } from '../actions/constants';

const ContentControl = ({ type, id, commentsCount, history, match, deletePost, deleteComment, showForm }) => (
  <div className='content-control'>
    { commentsCount !== undefined && 
      <div className='content-control-item'>
        <FaCommentO />
        <WhiteSpace />
        <span>{commentsCount} comments</span>
      </div>
    }
    {type === 'posts' ? 
      <EditLinkPost id={id} /> 
      :
      <EditLinkComment showForm={showForm} />
    }
    <div className='content-control-item'>
      <FaTrashO />
      <WhiteSpace />
      <Link to='/' onClick={(event) => {
        event.preventDefault();
        if (type === CONTENT_POSTS) {
          deletePost(id);
          history.push('/');
        } else if (type === CONTENT_COMMENTS) {
          deleteComment(id);
        }
      }}>
        <span>Delete</span>
      </Link>
    </div>
  </div>
)

export default withRouter(connect(
  undefined,
  { deletePost, deleteComment }
)(ContentControl));