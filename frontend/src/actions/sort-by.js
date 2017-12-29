import { SET_SORT_BY } from '../actions/constants';

export const setSortBy = (content, sortByType, order) => {
  return {
    type: SET_SORT_BY,
    content,
    sortByType,
    order
  }
}