import { combineReducers } from 'redux';
import modalReducer from './modal_reducer';
import currentServerReducer from './current_server_reducer';
import currentChannelReducer from './current_channel_reducer';

const uiReducer = combineReducers({
  current_server_id: currentServerReducer,
  current_channel_id: currentChannelReducer,
  modal: modalReducer,
});

export default uiReducer;
