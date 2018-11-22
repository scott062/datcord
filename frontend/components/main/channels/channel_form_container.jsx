import { connect } from 'react-redux';
import React from 'react';
import { createChannel } from '../../../actions/channel_actions';
import { openModal, closeModal } from '../../../actions/modal_actions';
import ChannelForm from './channel_form.jsx';

const msp = (state) => {
  return {
    formType: 'createChannel',
  };
};

const mdp = (dispatch) => {
  return {
    processForm: (channelDetails) => dispatch(createServer(channelDetails)),

    closeModal: () => dispatch(closeModal()),
  };
};

export default connect(msp, mdp)(ChannelForm);
