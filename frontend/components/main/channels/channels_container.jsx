import React from 'react';
import { connect } from 'react-redux';
import ChannelsIndex from './channels_index';

const msp = (state) => {
  const channels = state.entities.channels;
  return {
    channels: Object.values(channels),
  }
};

const mdp = (dispatch) => {
  return
};

export default connect(msp, mdp)(ChannelsIndex);
