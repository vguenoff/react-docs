import React, { Component } from 'react';

class NameForm extends Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);

    this.state = { value: '' }
  }
  handleChange(e) {
    this.setState({value: e.target.value.toUpperCase()});
  }
  handleSubmit(e) {
    e.preventDefault();
    alert(`A name was submited: ${this.state.value}`);
  }
  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          Name
          <input
            type="text"
            value={this.state.value}
            onChange={this.handleChange}
          />
        </label>
        <input type="submit" value="Submit"/>
      </form>
    );
  }
}

export default NameForm;
