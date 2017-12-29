import Api from '../api';
import { getAllComments } from '../actions/comments';
import {
  GET_ALL_POSTS_SUCCESS,
  CREATE_POST_SUCCESS,
  EDIT_POST_SUCCESS,
  DELETE_POST_SUCCESS,
  UPVOTE_POST_SUCCESS,
  DOWNVOTE_POST_SUCCESS
} from '../actions/constants';
import { wait } from '../utils/helper';

export const getAllPostsAndComments = () => (dispatch) => {
  wait(2000)
    .then(() => Api.getPosts())
    .then(posts => {
      dispatch(getAllPostsSuccess(posts));
      posts.map(({ id }) => dispatch(getAllComments(id)));
    });
}

const getAllPostsSuccess = (posts) => {
  return {
    type: GET_ALL_POSTS_SUCCESS,
    posts
  }
}

export const createPost = (data) => (dispatch) => {
  Api.createPost(data)
    .then(post => dispatch(createPostSuccess(post)));
}

const createPostSuccess = (post) => {
  return {
    type: CREATE_POST_SUCCESS,
    post
  }
}

export const editPost = (id, data) => (dispatch) => {
  Api.editPost(id, data)
    .then((post) => dispatch(editPostSuccess(post)));
}

const editPostSuccess = (post) => {
  return {
    type: EDIT_POST_SUCCESS,
    post
  }
}

export const deletePost = (id) => (dispatch) => {
  Api.deletePost(id)
    .then(() => dispatch(deletePostSuccess(id)));
}

const deletePostSuccess = (id) => {
  return {
    type: DELETE_POST_SUCCESS,
    id
  }
}

export const upvotePost = (id) => (dispatch) => {
  Api.upvotePost(id)
    .then(({ id }) => dispatch(upvotePostSuccess(id)));
}

const upvotePostSuccess = (id) => {
  return {
    type: UPVOTE_POST_SUCCESS,
    id
  }
}

export const downvotePost = (id) => (dispatch) => {
  Api.downvotePost(id)
    .then(({ id }) => dispatch(downvotePostSuccess(id)));
}

const downvotePostSuccess = (id) => {
  return {
    type: DOWNVOTE_POST_SUCCESS,
    id
  }
}