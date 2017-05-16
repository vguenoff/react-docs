import React, { Component } from 'react';

class Timer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      secondsElapsed: 0
    }
  }
  tick() {
    this.setState((prevSate) => ({
      secondsElapsed: prevSate.secondsElapsed + 1
    }));
  }
  componentDidMount() {
    this.interval = setInterval(() => this.tick(), 1000);
  }
  componentWillUnmount() {
    clearInterval(this.interval)
  }
  render() {
    return <div>Seconds elapsed: {this.state.secondsElapsed}</div>;
  }
}

export default Timer;
