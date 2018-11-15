import React from 'react';
import { withRouter } from 'react-router-dom';


class SessionForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: '',
      email: '',
    }

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  renderHeader() {
    if (this.props.formType === 'signup') {
      return (
        <div className="session-header">
          <h2>Create an account</h2>
        </div>
      )
    } else {
      return (
        <div className="session-header">
          <h2>Welcome back!</h2>
          <h3>We're so excited to see you again!</h3>
        </div>
      )
    }
  }

  handleSubmit(e) {
    e.preventDefault();
    const user = Object.assign({}, this.state)
    this.props.formAction(user)
  }

  update(field) {
    return e => this.setState({
      [field]: e.currentTarget.value
    });
  }

  isSignup() {
    if (this.props.formType === 'signup') {
      return (
          <label>
            USERNAME
            <input
              className="session-input"
              type='text'
              value={this.props.username}
              onChange={this.update('username')}
            />
          </label>
      )
    }
  }

  renderErrors () {
    return (
      <ul className="errors">
      {this.props.errors.map( (error, i) => (
        <li key={`${i}`}>{error}</li>
      ))}
      </ul>
    )
  }

  render () {
    return (
      <div className="session-form-container">
        {this.renderHeader()}
        {this.renderErrors()}

        <form onSubmit={this.handleSubmit}>
          <label>
            EMAIL
            <input
              className="session-input"
              type='text'
              value={this.props.email}
              onChange={this.update('email')}
            />
          </label>
          {this.isSignup()}
          <label>
            PASSWORD
            <input
              className="session-input"
              type='password'
              value={this.props.password}
              onChange={this.update('password')}
            />
          </label>
          <input
            type="submit"
            value={this.props.formType}
          />
          {this.props.navLink}
        </form>
      </div>
    )
  }
}

export default withRouter(SessionForm);
