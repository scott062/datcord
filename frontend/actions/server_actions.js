import * as ServerApiUtil from '../util/server_api_util';

export const RECEIVE_SERVER = 'RECEIVE_SERVER';
export const RECEIVE_SERVERS = 'RECEIVE_SERVERS';
export const REMOVE_SERVER = 'REMOVE_SERVER';


export const fetchServer = (id) => (dispatch) => {

  return (ServerApiUtil.fetchServer(id).then( (res) => {
       return (dispatch(receiveServer(res)))
     }))
};

export const fetchServers = () => (dispatch) => {
  return (ServerApiUtil.fetchServers().then( (res) => {
    return (dispatch(receiveServers(res)))
  }))
};

export const receiveServers = (payload) => {
  return {
    type: RECEIVE_SERVERS,
    payload
  }
};

export const receiveServer = (payload) => {
  return {
    type: RECEIVE_SERVER,
    payload
  }
};

export const createServer = (server) => (dispatch) => {
  return (ServerApiUtil.createServer(server).then((res) => {
       return (dispatch(receiveServer(res)))
     }))
};

export const deleteServer = (id) => (dispatch) => {
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
