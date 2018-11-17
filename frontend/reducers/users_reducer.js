import { RECEIVE_CURRENT_USER } from '../actions/session_actions';
import merge from 'lodash/merge';

const usersReducer = (currentState = {}, action) => {
  Object.freeze(currentState);
  
  switch (action.type) {
    case RECEIVE_CURRENT_USER:
      return merge({}, currentState, { [action.user.id]: action.user } )

    default:
      return currentState;
  };
};

export default usersReducer;
