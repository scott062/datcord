import React from 'react';
import ServerItem from './server_item';

class ServerIndex extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.fetchServers();
  }

  render() {
    const { servers } = this.props;
    let renderServerIndex;

    if (servers) {
      renderServerIndex = (Object.values(servers).map(server => (
        <ServerItem
          key={server.id}
          server={server} />
      )));
    }
    return (
      <div className='serverListContainer'>
        <ul>
          {renderServerIndex}
        </ul>
      </div>
    )
  }
}

export default ServerIndex;
