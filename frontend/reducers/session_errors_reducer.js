import { RECEIVE_ERRORS, RECEIVE_CURRENT_USER } from '../actions/session_actions';

const sessionErrorsReducer = (currentState = {}, action) => {
  Object.freeze(currentState);
  switch (action.type) {
    case (RECEIVE_ERRORS):
      return { errors: action.errors }
    case (RECEIVE_CURRENT_USER):
      return { errors: [] };

    default:
      return currentState;

  };
};

export default sessionErrorsReducer;
