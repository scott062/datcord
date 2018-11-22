import merge from 'lodash/merge';
import { RECEIVE_MESSAGE, RECEIVE_MESSAGES } from '../actions/message_actions';

const messageReducer = (currentState = {}, action) => {
  Object.freeze(currentState);

  switch (action.type) {
    case RECEIVE_MESSAGES:
      return action.payload.messages;
    case RECEIVE_MESSAGE:
      return merge({}, currentState, {[action.message.id]: action.message})
    default:
      return currentState;
  }
}

export default messageReducer;
