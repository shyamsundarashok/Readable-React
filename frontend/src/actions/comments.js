import Api from '../api';
import {
  GET_ALL_COMMENTS_SUCCESS,
  CREATE_COMMENT_SUCCESS,
  EDIT_COMMENT_SUCCESS,
  DELETE_COMMENT_SUCCESS,
  UPVOTE_COMMENT_SUCCESS,
  DOWNVOTE_COMMENT_SUCCESS
} from '../actions/constants';

export const getAllComments = (postId) => (dispatch) => {
  return Api.getComments(postId)
    .then(comments => dispatch(getAllCommentsSuccess(comments)));
}

const getAllCommentsSuccess = (comments) => {
  return {
    type: GET_ALL_COMMENTS_SUCCESS,
    comments
  }
}

export const createComment = (parentId, comment) => (dispatch) => {
  Api.createComment(parentId, comment)
    .then((comment) => dispatch(createCommentSuccess(comment)));
}

const createCommentSuccess = (comment) => {
  return {
    type: CREATE_COMMENT_SUCCESS,
    comment
  }
}

export const editComment = (id, comment) => (dispatch) => {
  Api.editComment(id, comment)
    .then((comment) => dispatch(editCommentSuccess(comment)));
}

const editCommentSuccess = (comment) => {
  return {
    type: EDIT_COMMENT_SUCCESS,
    comment
  }
}

export const deleteComment = (id) => (dispatch) => {
  Api.deleteComment(id)
    .then(() => dispatch(deleteCommentSuccess(id)));
}

const deleteCommentSuccess = (id) => {
  return {
    type: DELETE_COMMENT_SUCCESS,
    id
  }
}

export const upvoteComment = (id) => (dispatch) => {
  Api.upvoteComment(id)
    .then(({ id }) => dispatch(upvoteCommentSuccess(id)));
}

const upvoteCommentSuccess = (id) => {
  return {
    type: UPVOTE_COMMENT_SUCCESS,
    id
  }
}

export const downvoteComment = (id) => (dispatch) => {
  Api.downvoteComment(id)
    .then(({ id }) => dispatch(downvoteCommentSuccess(id)));
}

const downvoteCommentSuccess = (id) => {
  return {
    type: DOWNVOTE_COMMENT_SUCCESS,
    id
  }
}