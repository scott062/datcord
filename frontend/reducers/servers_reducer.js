import { RECEIVE_SERVER, RECEIVE_SERVERS, REMOVE_SERVER } from '../actions/server_actions';
import merge from 'lodash/merge'

const serversReducer = (currentState = {}, action) => {
  Object.freeze(currentState)
  debugger
  switch (action.type) {
    case RECEIVE_SERVERS:
      return merge({}, currentState, action.payload.servers);
    case RECEIVE_SERVER:
      return merge({}, currentState, {[action.payload.server.id]: action.payload.server})
    case REMOVE_SERVER:
      let newState = merge({}, currentState);
      delete newState[action.server.id]
      return newState;

    default:
      return currentState
  }
}

export default serversReducer;
