import React, { Component } from 'react';
import './Toggle.css';

class Toggle extends Component {
  constructor(props) {
    super(props);
    this.state = { isToggleOn: true };
    // This binding is necessary to make 'this' work in the callback
    this.handleClick = this.handleClick.bind(this);
  }
  handleClick() {
    this.setState((prevState) => ({
      isToggleOn: !prevState.isToggleOn
    }));
  }
  render() {
    return (
      <div className="Toggle" onClick={this.handleClick}>
        <div className={this.state.isToggleOn ? 'on' : 'off'} />
      </div>
    );
  }
}

export default Toggle;
