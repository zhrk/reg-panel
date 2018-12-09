import React, { Component} from 'react';
import './Checkbox.css';

class Checkbox extends Component {
  render() {
    return (
      <div className="checkbox">
        <input id={this.props.id} type="checkbox" />
        <label htmlFor={this.props.id}></label>
      </div>
    );
  }
}

export default Checkbox;