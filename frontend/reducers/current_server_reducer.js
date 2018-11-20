import { RECEIVE_SERVER } from '../actions/server_actions';
import merge from 'lodash/merge'

const currentServerReducer = (currentState = null, action) => {
  Object.freeze(currentState);

  switch (action.type) {
    case RECEIVE_SERVER:
      return action.payload.server.id;

    default:
      return currentState;
  }
}

export default currentServerReducer;
