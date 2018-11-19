import { combineReducers } from 'redux';
import modalReducer from './modal_reducer';
import currentServerReducer from './current_server_reducer';

const uiReducer = combineReducers({
  current_server: currentServerReducer,
  modal: modalReducer
});

export default uiReducer;
