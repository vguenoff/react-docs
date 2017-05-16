import React, { Component } from 'react';
import Remarkable from 'remarkable';

class MarkdownEditor extends Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.state = {
      value: 'Type some *markdown* here!'
    }
  }
  handleChange(e) {
    this.setState({value: e.target.value})
  }
  getRawMarkup() {
    const md = new Remarkable();
    return { __html: md.render(this.state.value) }
  }
  render() {
    return (
      <div className="MarkdownEditor">
        <h3>Input</h3>
        <textarea
          defaultValue={this.state.value}
          onChange={this.handleChange}
        />
        <h3>Output</h3>
        <div
          dangerouslySetInnerHTML={this.getRawMarkup()}
        />
      </div>
    );
  }
}

export default MarkdownEditor;
