import React from 'react';
import ChannelIndexItem from './channel_index_item';

class ChannelsIndex extends React.Component {
  constructor (props) {
    super(props);
  }

  componentDidMount() {
    this.props.fetchServer(this.props.match.params.serverId)
  }

  render() {
    const { channels } = this.props;

    return (
      <div className="channels_container">
          <ul>
            {channels.map(channel => (
              <ChannelIndexItem
                key={channel.id}
                channel={channel} />
            )
          )}
        </ul>
      </div>
    )
  }
}

export default ChannelsIndex;
