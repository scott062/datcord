import merge from 'lodash/merge';
import { RECEIVE_SERVER } from '../actions/server_actions';
import { RECEIVE_CHANNEL } from '../actions/channel_actions';

const channelsReducer = (state = {}, action) => {
  Object.freeze(state);

  let channels;
  debugger

  switch (action.type) {
    case RECEIVE_SERVER:
      channels = action.payload.channels
      return merge({}, state, channels);
    case RECEIVE_CHANNEL:
      if (typeof state[action.payload.channel.id] === 'undefined') {
        return merge({}, state, {[action.payload.channel.id]: action.payload.channel})
      } else {
        return state;
      }

    default:
      return state;
  }
}

export default channelsReducer;
