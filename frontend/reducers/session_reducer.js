import { RECEIVE_CURRENT_USER, LOGOUT_CURRENT_USER } from '../actions/session_actions';

const sessionReducer = (currentState = {}, action) => {
  Object.freeze(currentState);

  switch (action.type) {
    case RECEIVE_CURRENT_USER:
      return { current_user_id: action.user.id }
    case LOGOUT_CURRENT_USER:
      return { current_user_id: null }

    default:
      return currentState;
  };
};

export default sessionReducer;
