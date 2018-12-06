import React from 'react';
import { connect } from 'react-redux';
import { createChannel } from '../../../actions/channel_actions';
import { openModal, closeModal } from '../../../actions/modal_actions';
import ChannelForm from './channel_form';

const msp = (state, ownProps) => {
  return {
    formType: 'createChannel',
    server_id: state.ui.current_server_id,
    channel_id: state.ui.current_channel_id,
  };
};

const mdp = (dispatch) => {
  return {
    processForm: (channelDetails) => dispatch(createChannel(channelDetails)),

    closeModal: () => dispatch(closeModal()),
  };
};

export default connect(msp, mdp)(ChannelForm);
