import { RECEIVE_CURRENT_USER, LOGOUT_CURRENT_USER } from '../actions/session_actions';

const sessionReducer = (currentState = {}, action) => {
  Object.freeze(currentState);
  debugger
  switch (action.type) {
    case RECEIVE_CURRENT_USER:
      return { currentUserId: action.user.id }
    case LOGOUT_CURRENT_USER:
      return { currentUserId: null }

    default:
      return currentState;
  };
};

export default sessionReducer;
