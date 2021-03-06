import React, { Component } from 'react';

class TextInput extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: '',
    };
  }

  handleChange = (event) => {
    this.setState({value: event.target.value});
  }

  handleSubmit = (event) => {
    this.props.addPost(this.state.value);
    event.preventDefault();
    this.setState({
      value: '',
    });
  }

  render() {
    return(
      <form onSubmit={this.handleSubmit} className="status-form">
        <label>Status</label>
        <input type="text" onChange={this.handleChange} value={this.state.value} placeholder="Write something ..."></input>
        <button>Submit</button>
      </form>
    );
  }
};

export default TextInput;