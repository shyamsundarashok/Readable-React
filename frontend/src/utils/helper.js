import moment from 'moment';

export const capitalizeFirst = string => string.charAt(0).toUpperCase() + string.slice(1);

export const formatDate = timestamp => moment(timestamp).format('LLLL');

const sortArrayByKeyAsc = (array, key) => {
  return array.sort((item1, item2) => {
    return (item1[key] < item2[key]) ? -1 : ((item1[key] > item2[key]) ? 1 : 0);
  })
}

const sortArrayByKeyDesc = (array, key) => {
  return array.sort((item1, item2) => {
    return (item1[key] < item2[key]) ? 1 : ((item1[key] > item2[key]) ? -1 : 0);
  })
}

export const sortContent = {
  'ascending': sortArrayByKeyAsc,
  'descending': sortArrayByKeyDesc
}

export const wait = delay => new Promise(resolve => setTimeout(resolve, delay));