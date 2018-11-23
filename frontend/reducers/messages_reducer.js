import merge from 'lodash/merge';
import { RECEIVE_MESSAGES } from '../actions/message_actions';
import { RECEIVE_CHANNEL } from '../actions/channel_actions';

const messageReducer = (currentState = {}, action) => {
  Object.freeze(currentState);

  switch (action.type) {
    case RECEIVE_MESSAGES:
      return action.payload.messages;
    case RECEIVE_CHANNEL:
      if (typeof action.payload.messages != 'undefined') {
        return action.payload.messages;
      }
    default:
      return currentState;
  }
}

export default messageReducer;
