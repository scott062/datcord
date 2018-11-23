import merge from 'lodash/merge';
import { RECEIVE_CHANNEL } from '../actions/channel_actions';


const currentChannelReducer = (state = null, action) => {
  Object.freeze(state);

  let channel;

  switch (action.type) {
    case RECEIVE_CHANNEL:
      return (action.payload.channel.id);

    default:
      return state;
  }
}

export default currentChannelReducer;
