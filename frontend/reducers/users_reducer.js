import merge from 'lodash/merge';

import { RECEIVE_CURRENT_USER } from '../actions/session_actions';
import { RECEIVE_SERVER } from '../actions/server_actions';


const usersReducer = (currentState = {}, action) => {
  Object.freeze(currentState);

  switch (action.type) {
    case RECEIVE_CURRENT_USER:
      return merge({}, currentState, { [action.user.id]: action.user } )
    case RECEIVE_SERVER:

      return merge({}, currentState, action.payload.users)

    default:
      return currentState;
  };
};

export default usersReducer;
