import React from 'react';
import { Link } from 'react-router-dom';
import { withRouter } from 'react-router-dom';
import BubbleComponent from './bubbles.jsx';

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

  renderNavLink() {
    if (this.props.formType === 'signup') {
      return (
        <div className="navLink">
          <Link to='/login'>Already have an account?</Link>
        </div>
      )
    } else {
      return (
        <div className="navLink">
          <p>Need an account?</p><Link to='/signup'>Register</Link>
          <p>Or want to test it first?</p>
          <button onClick={this.props.demoLogin}>Try it now!</button>
        </div>
      )
    }
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

  renderUsernameField() {
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
    if (this.props.errors) {
      return (
        <ul className="errors">
        {this.props.errors.map( (error, i) => (
          <li key={`${i}`}>{error}</li>
        ))}
        </ul>
      )
    } else {
      return
    }
  }

  render () {
    return (
      <div className="background">
      <div className="parentCloud"><div className="cloud"></div></div>
      <BubbleComponent />
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
          {this.renderUsernameField()}
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
        </form>
        {this.renderNavLink()}
      </div>
    </div>
    )
  }
}

export default withRouter(SessionForm);
