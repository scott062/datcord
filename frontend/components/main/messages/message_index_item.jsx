import React from 'react';

class MessageIndexItem extends React.Component {
  render() {
    let message = this.props.message;
    let name = this.props.authorName;
    return (
      <li key={message.id}>
        <span>{message.created_at.slice(11, 16)} {name}</span>
        {message.body}
      </li>
    )
  }
}


export default MessageIndexItem;
