import { FETCH_ALL, FETCH_BY_SEARCH, FETCH_BY_CREATOR, FETCH_POST, CREATE, UPDATE, DELETE, LIKE, COMMENT } from '../constants/actionTypes';

export default (  items= [] , action) => {
  switch (action.type) {
    case DELETE:
      return items.filter((item) => item._id !== action.payload);
    case LIKE:
      return items.map((item) => (item._id === action.payload._id ? action.payload : item));
    case UPDATE:
      return items.map((item) => (item._id === action.payload._id ? action.payload : item));
    case FETCH_ALL:
      return action.payload;
    case CREATE:
      return [...items,action.payload];
    default:
      return items;
  }
};