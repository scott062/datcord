import { RECEIVE_CURRENT_USER, LOGOUT_CURRENT_USER } from '../actions/session_actions';

const currentUserReducer = (currentState = {}, action) => {
  Object.freeze(currentState);

  switch (action.type) {
    case RECEIVE_CURRENT_USER:
      return { currentUser: action.user.id }
    case LOGOUT_CURRENT_USER:
      return { currentUser: null }

    default:
      return currentState;
  };
};

export default currentUserReducer;
