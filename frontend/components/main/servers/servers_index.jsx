import React from 'react';
import ServerIndexItem from './server_index_item';

class ServerIndex extends React.Component {

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
          server={ server } />
      )));
    }
    return (
      <div className='serverListContainer'>
        <ul>
          {renderServerIndexItem}
        </ul>
      </div>
    )
  }
}

export default ServerIndex;
