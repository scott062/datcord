import React from 'react';
import ChannelIndexItem from './channel_index_item';
import { Route } from 'react-router-dom';

class ChannelsIndex extends React.Component {
  constructor (props) {
    super(props);
  }

  componentDidMount() {
    this.props.fetchServer(this.props.match.params.serverId)
  }

  componentDidUpdate(prevProps) {
    if (prevProps.match.params.serverId !== this.props.match.params.serverId) {
      this.props.fetchServer(this.props.match.params.serverId);
    }
  }

  render() {
    const { channels } = this.props;

    return (
      <>
      <Route path=':channelId'
        component={MessagesIndexContainer}/>
      <div className="channels_container">
        <header><span>{this.props.server_name}</span></header>
          <ul>
            {channels.map(channel => (
              <ChannelIndexItem
                key={channel.id}
                channel={channel} />
            )
          )}
        </ul>
      </div>
      </>
    )
  }
}

export default ChannelsIndex;
