import React, { Component } from 'react';

import './LoginControl.css';

const UserGreeting = () => <h1>Welcome Back!</h1>;
const GuestGreeting = () => <h1>Please Sign Up.</h1>;
const Greeting = props => props.isLoggedIn ? <UserGreeting /> : <GuestGreeting />;

const LoginButton = props => <button onClick={props.onClick}>Login</button>;
const LogoutButton = props => <button onClick={props.onClick}>Logout</button>;

class LoginControl extends Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
    this.state = { isLoggedIn: false };
  }
  handleClick() {
    this.setState((prevState) => (
      { isLoggedIn: !prevState.isLoggedIn }
    ));
  }
  render() {
    const button = this.state.isLoggedIn ?
       <LogoutButton onClick={this.handleClick} /> :
       <LoginButton onClick={this.handleClick} />;
    return (
      <div>
        <Greeting isLoggedIn={this.state.isLoggedIn}/>
        {button}
      </div>
    );
  }
}
export default LoginControl;
