import { NavigationActions } from 'react-navigation';

import { HomeScreenRouter } from '../containers/HomeScreen';

// follow example from : https://github.com/react-community/react-navigation/tree/master/examples/ReduxExample

// Start with two routes: The Main screen, with the Login screen on top.
const firstAction = HomeScreenRouter.router.getActionForPathAndParams('Home');
// const tempNavState = HomeScreenRouter.router.getStateForAction(firstAction);
// const secondAction = HomeScreenRouter.router.getActionForPathAndParams('Login');
const initialNavState = HomeScreenRouter.router.getStateForAction(
  firstAction
);

function nav(state = initialNavState, action) {
  let nextState;
  switch (action.type) {
    default:
      nextState = HomeScreenRouter.router.getStateForAction(action, state);
      break;
  }

  // Simply return the original `state` if `nextState` is null or undefined.
  return nextState || state;
}

export default nav;