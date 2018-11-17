import { RECEIVE_SERVER, RECEIVE_SERVERS, REMOVE_SERVER } from '../actions/server_actions';
import merge from 'lodash/merge'

const serversReducer = (currentState = {}, action) => {
  Object.freeze(currentState)

  switch (action.type) {
    case RECEIVE_SERVERS:
      return merge({}, currentState, action.servers);
    case RECEIVE_SERVER:
      return merge({}, currentState, {[action.server.id]: action.server})
    case REMOVE_SERVER:
      let newState = merge({}, currentState);
      delete newState[action.server.id]
      return newState;

    default:
      return currentState
  }
}

export default serversReducer;
