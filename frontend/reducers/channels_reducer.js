import merge from 'lodash/merge';
import { RECEIVE_SERVER } from '../actions/server_actions';

const channelsReducer = (state = {}, action) => {
  Object.freeze(state);

  let channels;

  switch (action.type) {
    case RECEIVE_SERVER:

      return merge({}, state, {action.server.channels}}

    default:
      return state;
  }
}

export default channelsReducer;
