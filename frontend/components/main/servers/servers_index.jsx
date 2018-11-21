import React from 'react';
import { Route } from 'react-router-dom';

import ServerIndexItem from './server_index_item';
import ChannelIndexContainer from '../channels/channels_container';
import MembersIndexContainer from '../members/members_index_container';

class ServerIndex extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.fetchServers();
  }

  render() {
    const { servers } = this.props;
    let renderServerIndexItem;
    if (servers) {
      renderServerIndexItem = (Object.values(servers).map(server => (
        <ServerIndexItem
          key={server.id}
          server={ server }
        />
      )));
    }
    return (
      <div className='main'>
        <Route path='/servers/:serverId/channels' component={ChannelIndexContainer} />
        <Route path='/servers/:serverId/' component={MembersIndexContainer}/>
        
        <ul className='serversListContainer'>
          {renderServerIndexItem}
        </ul>
      </div>
    )
  }
}

export default ServerIndex;
