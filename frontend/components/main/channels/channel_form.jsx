import React from 'react';


class ChannelForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      channelName: '',
    }
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    const channelDetails = Object.assign({}, this.state);
  }

  update(field) {
    return e => this.setState({
      [field]: e.currentTarget.value
    });
  }

  render() {
    return (
      <div className='channel_form_div_par'>
        <header className='channel_form_header'>
          Create Your Channel
        </header>

        <form onSubmit={this.handleSubmit}>
          <label>
            Channel Name
            <input
              className='channel_name_input'
              type='text'
              value={this.props.channelName}
              onChange={this.update('channelName')} />
          </label>
          <label>
            Channel Region
            <input
              className='channel_region_input'
              value={this.props.channelRegion} />
          </label>
          <input
            className='create_channel_button'
            type='submit'
            value='Create' />
        </form>
      </div>
    )
  }
}

export default ChannelForm;
