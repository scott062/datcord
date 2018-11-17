import * as ServerApiUtil from '../util/server_api_util';

export const RECEIVE_SERVER = 'RECEIVE_SERVER';
export const RECEIVE_SERVERS = 'RECEIVE_SERVERS';
export const REMOVE_SERVER = 'REMOVE_SERVER';


export fetchServer = (id) => (dispatch) => {
  return (ServerApiUtil.fetchServer(id).then( (res) => {
       return (dispatch(receiveServer(res)))
     }))
};

export fetchServers = (current_user) => (dispatch) => {
  return
  (ServerApiUtil.fetchServers(currentUser).then( (res) => {
    return (dispatch(receiveServers(res)))
  }))
};

export const receiveServers = (servers) => {
  return {
    type: RECEIVE_SERVERS,
    servers
  }
};

export const receiveServer = (server) => {
  return {
    type: RECEIVE_SERVER,
    server
  }
};

export createServer = (serverDetails) => (dispatch) => {
  (ServerApiUtil.createServer(serverDetails).then((res) => {
       return (dispatch(receiveServer(res)))
     }))
};

export const fetchServer = (id) => (dispatch) => {
  return (ServerApiUtil.deleteServer(id).then( (res) => {
       return (dispatch(removeServer(res)))
     }))
};

export const removeServer = (server) => {
  return {
    type: REMOVE_SERVER,
    server
  }
};
