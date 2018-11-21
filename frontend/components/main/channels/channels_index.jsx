import React from 'react';
import { Route } from 'react-router-dom';

import MessagesIndexContainer from '../messages/messages_index_container';
import ChannelIndexItem from './channel_index_item';

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
      <Route path='channels/:channelId'
        component={MessagesIndexContainer}/>
      <div className="channels_container">
        <header><span>SERVER NAME HERE</span></header>
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
