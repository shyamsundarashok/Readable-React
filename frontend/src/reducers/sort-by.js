import { SET_SORT_BY } from '../actions/constants';

export const DEFAULT_SORT_BY = {
  posts: {
    type: 'voteScore',
    order: 'descending'
  },
  comments: {
    type: 'voteScore',
    order: 'descending'
  } 
}

const sortBy = (state = DEFAULT_SORT_BY, action) => {
  switch(action.type) {
    case SET_SORT_BY:
      return {
        ...state,
        [action.content]: {
          type: action.sortByType,
          order: action.order
        }
      }
    default:
      return state;
  }
}

export default sortBy;