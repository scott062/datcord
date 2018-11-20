import React from 'react';
import { Link } from 'react-router-dom';
import { fetchServer } from '../../../actions/server_actions';
import ChannelIndexContainer from '../channels/channels_container';

export default ({server}) => {
  return (
    <li className="serverIndexItem">
      <Link to={`/servers/${server.id}/channels`}>
        <img src={server.photo_url} alt="" title={server.server_name}/>
      </Link>
    </li>
  );
};


import { Route, Switch } from 'react-router-dom';
<Route path='/servers/:server_id/channels' component={ChannelIndexContainer} />
