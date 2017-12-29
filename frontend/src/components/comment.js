import React from 'react';
import { connect } from 'react-redux';

import { upvoteComment, downvoteComment } from '../actions/comments';
import Stats from './stats';
import { CONTENT_COMMENTS } from '../actions/constants';
import ContentControl from './content-control';
import { formatDate } from '../utils/helper';

const Comment = ({ id, body, author, timestamp, voteScore,
  onUpvoteComment, onDownvoteComment, onDelete, showEditCommentForm }) => {
  return (
    <div className='content-container-comment'>      
      <div className='comment-detail'>
        <div className='comment-body'>{body}</div>
        <div className='post-info'>
          <p className='author-date-time'>by <b>{author}</b> at {formatDate(timestamp)}</p>
          <Stats
            voteScore={voteScore}
            onUpvote={() => onUpvoteComment(id)}
            onDownvote={() => onDownvoteComment(id)}
          />
        </div>
        <ContentControl type={CONTENT_COMMENTS} id={id} showForm={showEditCommentForm} />
      </div>
    </div>
  )
}

export default connect(
  undefined,
  { onUpvoteComment: upvoteComment, onDownvoteComment: downvoteComment }
)(Comment);