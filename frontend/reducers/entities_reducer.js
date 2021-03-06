import { combineReducers } from 'redux';
import usersReducer from './users_reducer';
import serversReducer from './servers_reducer';
import channelsReducer from './channels_reducer';
import currentServerReducer from './current_server_reducer';

const entitiesReducer = combineReducers({
  users: usersReducer,
  servers: serversReducer,
  channels: channelsReducer,
  current_server: currentServerReducer,
});

export default entitiesReducer;
