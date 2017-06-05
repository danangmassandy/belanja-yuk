import * as types from './actionTypes';

export function setVisibilityFilter(displayType) {
  return {
    type: types.SET_VISIBILITY_FILTER_SHOPPING_LIST,
    displayType,
  };
}