import React from 'react';
import { API_ROOT, HEADERS } from '../../../util/action_cable_constants';

class ChannelForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      channel_name: '',
      communication_type: 'voice',
      server_id: props.server_id,
    }
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();

    fetch(`${API_ROOT}/channels`, {
      method: 'POST',
      headers: HEADERS,
      data: JSON.stringify(this.state)
    });
  };

  update(field) {
    return e => this.setState({
      [field]: e.currentTarget.value
    });
  }

  render() {
    return (
      <div className='channel_form_div_par'>
        <header className='channel_form_header'>
          Create Text Channel
          <p>in Text Channels</p>
        </header>

        <form onSubmit={this.handleSubmit}>
          <label>
            Channel Name
            <input
              className='channel_name_input'
              type='text'
              value={this.props.channelName}
              onChange={this.update('channel_name')} />
          </label>

          <label>
            Text Channel
            <input
              checked="checked"
              name="communication_type"
              className='channel_name_input'
              type='radio'
              value='text'
              onChange={this.update('communication_type')} />
          </label>
          <label>
            Voice Channel
            <input
              className='channel_name_input'
              name="communication_type"
              type='radio'
              value='voice'
              onChange={this.update('channel_name')} />
          </label>
          <input
            className='create_channel_button'
            type='submit'
            value='Create Channel' />
        </form>
      </div>
    )
  }
};

export default ChannelForm;
