import { RECEIVE_CURRENT_USER, LOGOUT_CURRENT_USER } from '../actions/session_actions';
import merge from 'lodash/merge';



const sessionReducer = (currentState = {}, action) => {
  Object.freeze(currentState);
  switch (action.type) {
    case RECEIVE_CURRENT_USER:
      return {merge({}, currentState, { id: action.user.id})}
    case LOGOUT_CURRENT_USER:
      let newState = merge({}, currentState)
      delete newState['id'];
      return newState
    default:
      return defaultState;
  };
};

export default sessionReducer;
