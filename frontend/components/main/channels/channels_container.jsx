import React from 'react';
import { connect } from 'react-redux';
import ChannelsIndex from './channels_index';
import { openModal } from '../../../actions/modal_actions';
import { fetchServer } from '../../../actions/server_actions';
import { logout } from '../../../actions/session_actions';

const msp = (state, ownProps) => {
  let channels = Object.values(state.entities.channels)
  channels = channels.filter(channel => channel.server_id === parseInt(ownProps.match.params.serverId));

  let server = state.entities.servers[state.ui.current_server]

  const currentUser = state.entities.users[state.session.current_user_id];
  return {
    channels: channels,
    server: server,
    currentUser: currentUser,
  };
};

const mdp = (dispatch) => {
  return {
    fetchServer: (id) => dispatch(fetchServer(id)),
    logout: () => dispatch(logout()),
    otherForm: () => dispatch(openModal('createChannel'))
  }
};

export default connect(msp, mdp)(ChannelsIndex);
