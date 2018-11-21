import React from 'react';
import { connect } from 'react-redux';
import ChannelsIndex from './channels_index';
import { fetchServer } from '../../../actions/server_actions';

const msp = (state) => {
  let channels = Object.values(state.entities.channels)
  channels = channels.filter(channel => channel.server_id === state.ui.current_server);

  return {
    channels: channels,
  };
};

const mdp = (dispatch) => {
  return {
    fetchServer: (id) => dispatch(fetchServer(id)),
  }
};

export default connect(msp, mdp)(ChannelsIndex);
