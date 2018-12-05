import * as MessageApiUtil from '../util/message_api_util';

export const RECEIVE_MESSAGES = 'RECEIVE_MESSAGES';
export const RECEIVE_MESSAGE = 'RECEIVE_MESSAGE';


export const fetchMessage = (id) => (dispatch) => {

  return (MessageApiUtil.fetchMessage(id).then( (res) => {
       return (dispatch(receiveMessage(res)))
     }))
};

export const fetchMessages = () => (dispatch) => {
  return (MessageApiUtil.fetchMessages().then( (res) => {
    return (dispatch(receiveMessages(res)))
  }))
};

export const createMessage = (messageDetails) => (dispatch) => {
  (MessageApiUtil.createMessage(messageDetails).then((res) => {
       return (dispatch(receiveMessage(res)))
     }))
};

export const receiveMessages = (messages) => {
  return {
    type: RECEIVE_MESSAGES,
    messages,
  }
};

export const receiveMessage = (message) => {
  return {
    type: RECEIVE_MESSAGE,
    message,
  }
}

// export const deleteMessage = (id) => (dispatch) => {
//   return (MessageApiUtil.deleteMessage(id).then( (res) => {
//        return (dispatch(removeMessage(res)))
//      }))
// };
//
// export const removeMessage = (message) => {
//   return {
//     type: REMOVE_MESSAGE,
//     message
//   }
// };
