import { RECEIVE_ERRORS, RECEIVE_CURRENT_USER } from '../actions/session_actions';
import merge from 'lodash/merge';

const sessionErrorsReducer = (currentState = [], action) => {
  Object.freeze(currentState);
debugger
  switch (action.type) {

    case RECEIVE_ERRORS:
      return merge([], currentState, action.errors)
    case RECEIVE_CURRENT_USER:
      let newState = null;
      return newState;

    default:
      return currentState;
  };
};

export default sessionErrorsReducer;
