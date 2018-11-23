import * as ChannelApiUtil from '../util/channel_api_util';

export const RECEIVE_CHANNEL = 'RECEIVE_CHANNEL';
export const RECEIVE_CHANNELS = 'RECEIVE_CHANNELS';
export const REMOVE_CHANNEL = 'REMOVE_CHANNEL';


export const fetchChannel = (server_id, channel_id) => (dispatch) => {

  return (ChannelApiUtil.fetchChannel(server_id, channel_id).then( (res) => {
       return (dispatch(receiveChannel(res)))
     }))
};

export const fetchChannels = () => (dispatch) => {
  return (ChannelApiUtil.fetchChannels().then( (res) => {
    return (dispatch(receiveChannels(res)))
  }))
};

export const receiveChannels = (payload) => {
  return {
    type: RECEIVE_CHANNELS,
    payload
  }
};

export const receiveChannel = (payload) => {
  return {
    type: RECEIVE_CHANNEL,
    payload
  }
};

export const createChannel = (channelDetails) => (dispatch) => {
  (ChannelApiUtil.createChannel(channelDetails).then((res) => {
       return (dispatch(receiveChannel(res)))
     }))
};

export const deleteChannel = (id) => (dispatch) => {
  return (ChannelApiUtil.deleteChannel(id).then( (res) => {
       return (dispatch(removeChannel(res)))
     }))
};

export const removeChannel = (channel) => {
  return {
    type: REMOVE_CHANNEL,
    channel
  }
};
