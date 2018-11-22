import merge from 'lodash/merge';
import { RECEIVE_SERVER } from '../actions/server_actions';
import { RECEIVE_CHANNEL } from '../actions/channel_actions';

const channelsReducer = (state = {}, action) => {
  Object.freeze(state);

  let channels;

  switch (action.type) {
    case RECEIVE_SERVER:
      channels = action.payload.channels
      return merge({}, state, channels);
    case RECEIVE_CHANNEL:
      return merge({}, state, {[action.channel.id]: action.channel})

    default:
      return state;
  }
}

export default channelsReducer;
