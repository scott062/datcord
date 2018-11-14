import React from 'react';
import { withRouter } from 'react-router-dom';


class SessionForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = this.props.state;
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(e) {
    return (e) => this.state.formAction(e)
  }

  update(field) {
    e.preventDefault();
    return e => this.setState({
      [field]: e.currentTarget.value
    });
  }

  isSignup() {
    if (this.state.formType === 'signup') {
      return (
        <div>
          <input
            type='text'
            value={this.state.email}
            onChange={this.update('email')}
          />
          <input
            type='text'
            value={this.state.avatar_url}
            onChange={this.update('avatar_url')}
          />
        </div>
      )
    }
  }

  renderErrors () {
    return (
      <ul>
      this.state.errors.map{ (error, i) => (
        <li key={`${i}`}>{error}</li>
      )}
      </ul>
    )
  }

  render () {
    return (
      <div>
        {this.renderErrors()}
        <form onSubmit={this.handleSubmit}>
          <input
            type='text'
            value={this.state.username}
            onChange={this.update('username')}
          />
          <input
            type='password'
            value={this.state.password}
            onChange={this.update('password')}
          />
          {this.isSignup}
        </form>
      </div>
    )
  }
}

export default withRouter(SessionForm);
