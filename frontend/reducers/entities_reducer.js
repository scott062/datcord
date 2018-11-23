import { combineReducers } from 'redux';
import usersReducer from './users_reducer';
import serversReducer from './servers_reducer';
import channelsReducer from './channels_reducer';
import currentServerReducer from './current_server_reducer';
import messagesReducer from './messages_reducer';
import currentChannelReducer from './current_channel_reducer';

const entitiesReducer = combineReducers({
  users: usersReducer,
  servers: serversReducer,
  channels: channelsReducer,
  current_server: currentServerReducer,
  current_channel: currentChannelReducer,
  messages: messagesReducer,
});

export default entitiesReducer;
