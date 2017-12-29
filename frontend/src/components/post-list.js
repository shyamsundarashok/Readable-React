import React from 'react';
import { Link } from 'react-router-dom';

import { CONTENT_POSTS } from '../actions/constants';
import Sorter from './sorter';
import PostSummary from './post-summary';

import {Button} from 'react-bootstrap';

const conditionalRender = (WrappedComponent) => ({ posts, ...props }) => (
  posts.length === 0 ?
  <WrappedComponent>
    <p><em>There are no posts to display!</em></p>
  </WrappedComponent>
  :
  <WrappedComponent {...props}>
    {posts.map(
      post => <PostSummary key={post.id} {...post} />
    )}
  </WrappedComponent>
)

const PostList = ({ children }) => (
  <div className='post-list'>
    <div className='post-submenu'>      
      <Sorter content={CONTENT_POSTS} />
     <Button><Link to='/posts/new'>Add Post</Link></Button>
    </div>
    {children}
  </div>
)

export default conditionalRender(PostList);