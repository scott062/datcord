import React from 'react';
import { connect } from 'react-redux';
import ChannelsIndex from './channels_index';
import { fetchServer } from '../../../actions/server_actions';

const msp = (state) => {
  const channels = state.entities.channels;
  return {
    channels: Object.values(channels),
  }
};

const mdp = (dispatch) => {
  return {
    fetchServer: (id) => fetchServer(id),
  }
};

export default connect(msp, mdp)(ChannelsIndex);
