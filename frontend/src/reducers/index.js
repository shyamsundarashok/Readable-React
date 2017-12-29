import { combineReducers } from 'redux';
import { reducer as form } from 'redux-form';

import categories from './categories';
import comments from './comments';
import posts from './posts';
import sortBy from './sort-by';

export default combineReducers({
  categories,
  posts,
  comments,
  sortBy,
  form
});