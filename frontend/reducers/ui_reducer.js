import { combineReducers } from 'redux';
import modalReducer from './modal_reducer';
import currentServerReducer from './current_server_reducer';
import currentChannelReducer from './current_channel_reducer';
import currentUserReducer from './current_user_reducer';

const uiReducer = combineReducers({
  current_server: currentServerReducer,
  current_channel: currentChannelReducer,
  current_user: currentUserReducer,
  modal: modalReducer,
});

export default uiReducer;
