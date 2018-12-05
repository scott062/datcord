import merge from 'lodash/merge';
import { RECEIVE_MESSAGES, RECEIVE_MESSAGE } from '../actions/message_actions';
import { RECEIVE_CHANNEL } from '../actions/channel_actions';

const messageReducer = (currentState = {}, action) => {
  Object.freeze(currentState);
  
  switch (action.type) {
    case RECEIVE_MESSAGES:
      return action.payload.messages;
    case RECEIVE_MESSAGE:
      return merge({}, currentState, {[action.message.id]: action.message})
    case RECEIVE_CHANNEL:
      if (typeof action.payload.messages != 'undefined') {
        return action.payload.messages;
      }
    default:
      return currentState;
  }
}

export default messageReducer;
