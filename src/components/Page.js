import React, { Component } from 'react';
import './Page.css';

const WarningBanner = ({ warn }) => warn ? <div className="warning">Warning!</div> : null;

class Page extends Component {
  constructor(props) {
    super(props);
    this.handleToggleClick = this.handleToggleClick.bind(this);
    this.state = { showWarning: true };
  }
  handleToggleClick() {
    this.setState((prevState) => ({
      showWarning: !prevState.showWarning
    }));
  }
  render() {
    return (
      <div className="Page">
        <WarningBanner warn={this.state.showWarning} />
        <button onClick={this.handleToggleClick}>
          {this.state.showWarning ? 'Hide' : 'Show'}
        </button>
      </div>
    );
  }
}

export default Page;
