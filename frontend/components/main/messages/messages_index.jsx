import React from 'react';
import MessageFormContainer from './message_form_container';

class MessagesIndex extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.fetchChannels(this.props.match.params.channel_id);
  }

  render() {
    let { messages } = this.props
    messages = (Object.values(messages).map(message =>
      <li><span>{message.create_at}{message.author_id}</span>{message.body}</li>))
    return (
      <div>
        <ul>{messages}</ul>
        <MessageFormContainer />
      </div>

    )
  }
}

export default MessagesIndex;
