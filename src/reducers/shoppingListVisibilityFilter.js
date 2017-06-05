import * as types from '../actions/actionTypes';

// expected values: 'all', 'completed', 'active'
const initialState = 'all';

export default function (state = initialState, action) {
  switch (action.type) {
      case types.SET_VISIBILITY_FILTER_SHOPPING_LIST:
      return action.displayType;
    default: {
        return state;
    }
  }
  
}