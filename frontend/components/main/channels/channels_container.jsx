import React from 'react';
import { connect } from 'react-redux';
import ChannelsIndex from './channels_index';
import { fetchServer } from '../../../actions/server_actions';
import { logout } from '../../../actions/session_actions';

const msp = (state) => {
  let channels = Object.values(state.entities.channels)
  channels = channels.filter(channel => channel.server_id === state.ui.current_server);

  let server = state.entities.servers[state.ui.current_server]

  const currentUser = state.entities.users[state.session.currentUserId];
  return {
    channels: channels,
    server: server,
    currentUser: currentUser,
  };
};

const mdp = (dispatch) => {
  return {
    fetchServer: (id) => dispatch(fetchServer(id)),
    logout: () => dispatch(logout())
  }
};

export default connect(msp, mdp)(ChannelsIndex);
