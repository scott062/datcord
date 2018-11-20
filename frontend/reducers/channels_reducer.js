import merge from 'lodash/merge';
import { RECEIVE_SERVER } from '../actions/server_actions';

const channelsReducer = (state = {}, action) => {
  Object.freeze(state);

  let channels;
  debugger
  switch (action.type) {
    case RECEIVE_SERVER:
      channels = action.payload.channels
      return merge({}, state, channels);

    default:
      return state;
  }
}

export default channelsReducer;
