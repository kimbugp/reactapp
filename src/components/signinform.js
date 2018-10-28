import '../css/login.css';

import React from 'react';

class SigninForm extends React.Component {
    handleSubmit = event => {
      event.preventDefault();
      this.props.onSubmit({
        username: this.usernameInput.value,
        password: this.passwordInput.value
      });
      this.usernameInput.value=''
      this.passwordInput.value=''
    };
  
    render() {
      return (
        <div className='login'>
          <form onSubmit={this.handleSubmit}>
            <input
              type="text"
              name="username"
              placeholder="Username"
              id="username"
              required
              className='login'
              ref={input => (this.usernameInput = input)}
            />
            <input
              type="password"
              name="password"
              placeholder="password"
              id="password"
              required
              className='login'
              ref={input => (this.passwordInput = input)}
            />
            <a href="/forgot" className="forgot">{'forgot password?'}</a>
            <button className='login' type="submit">Sign In</button>
            <p></p>
            <a href="/signup" className="forgot">{"Don't have an account"}</a>
          </form>
        </div>
      );
    }
  }


export default SigninForm;