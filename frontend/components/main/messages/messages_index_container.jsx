import React from 'react';
import { connect } from 'react-redux';
import { fetchChannel } from '../../../actions/channel_actions';
import { fetchMessages } from '../../../actions/message_actions';
import MessagesIndex from './messages_index';

const msp = (state, ownProps) => {
  let messages = Object.values(state.entities.messages)
  messages = messages.filter(message => message.channel_id === parseInt(ownProps.match.params.channelId))
  let channelName = state.entities.channels[ownProps.match.params.channelId].channel_name;
  return {
    messages: messages,
    current_server: ownProps.match.params.serverId,
    channelName: channelName,
  }
};

const mdp = (dispatch) => {
  return {
    fetchChannel: (server_id, channel_id) => dispatch(fetchChannel(server_id, channel_id)),
    fetchMessages: (channel_id) => dispatch(fetchMessages(channel_id)),
  }
};

export default connect(msp, mdp)(MessagesIndex);
