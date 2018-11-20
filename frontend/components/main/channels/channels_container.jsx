import React from 'react';
import { connect } from 'react-redux';
import channelsIndex from './channels_index';

const msp = (state) => {
  const channels = state.entities.channels;
  return {
    channels: Object.values(channels),
  }
};

const mdp = (dispatch) => {
  fetchMessages
};

export default connect(msp, mdp)(channelsIndex);
