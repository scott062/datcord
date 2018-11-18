// export default () => {
//   return (
//     <div className="servers_container">
//     </div>
//   )
// }
//
import React from 'react';
import { connect } from 'react-redux';
import ServersIndex from './servers_index';
import { fetchServers } from '../../../actions/server_actions';

const msp = (state) => {
  return {
    servers: state.entities.servers,
  }
};

const mdp = (dispatch) => {
  return {
    fetchServers: () => dispatch(fetchServers()),
  }
};

export default connect(msp, mdp)(ServersIndex);
