import React from 'react';
import ChannelIndexItem from './channel_index_item';

class ChannelsIndex extends React.Component {
  constructor (props) {
    super(props);
  }

  render() {
    const { channels } = this.props;
    
    return (
      <ul>
        {channels.map(channel => (
          <ChannelIndexItem
            key={channel.id}
            channel={channel} />
          )
        )}
      </ul>
    )
  }
}

export default ChannelsIndex;
