import React from 'react';


class ServerForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      serverName = '',
      serverRegion = 'US EAST',
    }
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    const serverDetails = Object.assign({}, this.state);
  }

  update(field) {
    return e => this.setState({
      [field]: e.currentTarget.value
    });
  }

  render() {
    return (
      <div className='server_form_div_par'>
        <header className='server_form_header'>
          Create Your Server
        </header>
        <h3 className='server_form_subhead'>
          By creating a server, you will have access to free text chat to use amongst your friends.
        </h3>
        <form onSubmit={this.handleSubmit}>
          <label>
            Server Name
            <input
              className='server_name_input'
              type='text'
              value={this.props.serverName}
              onChange={this.update('serverName')} />
          </label>
          <label>
            Server Region
            <input
              className='server_region_input'
              value={this.props.serverRegion} />
          </label>
          <input
            type='submit'
            value={this.props.formType} />
        </form>
      </div>
    )
  }
}
