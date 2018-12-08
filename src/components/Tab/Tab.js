import React, { Component } from 'react';
import './Tab.css';
import PropTypes from 'prop-types';

class Tab extends Component {

  constructor(props) {
    super(props);

    this.select = this.select.bind(this);
  }

  select() {
    this.props.handler(this.props.id);
  }

  render() {
    return (
      <div className="tab">
        <input className="tab__input" id={'tab__' + this.props.id} type="radio" name="subdomain" />
        <label
          className="tab__label"
          htmlFor={'tab__' + this.props.id}
          onClick={this.select}
        >
          {this.props.title}
        </label>
      </div>
    );
  }

}

Tab.propTypes = {
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  handler: PropTypes.func.isRequired
};

export default Tab;