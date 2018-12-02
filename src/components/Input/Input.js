import React, { Component } from 'react';
import './Input.css';

class Input extends Component {

  constructor(props) {
    super(props);

    this.state = {
      value: ''
    };

    this.inputField = React.createRef();

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    this.setState({
      value: event.target.value
    });
  }

  validate() {
    console.log('validate');
  }

  render() {
    return (
      <div className="input">
        <input
          type="text"
          value={this.state.value}
          onChange={this.handleChange}
          ref={this.inputField}
        />
      </div>
    );
  }
  
}

export default Input;