import React, { Component } from 'react';
import './Input.css';
import PropTypes from 'prop-types';

class Input extends Component {

  constructor(props) {
    super(props);

    this.state = {
      value: '',
      errorMessage: ''
    };

    this.inputField = React.createRef();

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    this.setState({
      value: event.target.value
    }, () => {
      this.validate();
    });
  }

  validate() {
    const value = this.state.value;
    let errors = [];

    //convert validate syntax sugar
    let rules = this.props.validate;
    rules = rules.split('|');

    rules.forEach(element => {
      let tempElement = element.split(':');
      let rule = tempElement[0];
      let ruleValue = tempElement[1];
      
      if (rule === 'min') {
        if (value.length < ruleValue) {
          errors.push(this.props.errorMessages.min);
        }
      }

      if (rule === 'max') {
        if (value.length > ruleValue) {
          errors.push(this.props.errorMessages.max);
        }
      }

      if (rule === 'email') {
        if (value.indexOf('@') === -1) {
          errors.push(this.props.errorMessages.email);
        }
      }

    });

    this.setState({
      errorMessage: errors
    });


    //response for submit
    if (errors.length === 0) {
      return {
        id: this.props.id,
        error: false,
        value: value
      }
    } else {
      return {
        id: this.props.id,
        error: true,
        value: value
      }
    }

  }

  renderLabel() {
    if (this.props.label !== '') {
      return (
        <label htmlFor={this.props.id} className="input__label">{this.props.label}</label>
      );
    }
  }

  renderPlaceholder() {
    if (this.props.placeholder === '') {
      return null;
    } else {
      return this.props.placeholder;
    }
  }

  errorInputClass() {
    if (this.state.errorMessage.length > 0) {
      return " input__field--error";
    } else {
      return "";
    }
  }

  errorTextClass() {
    if (this.state.errorMessage.length > 0) {
      return " input__error--active";
    } else {
      return "";
    }
  }
  
  render() {
    return (
      <div className="input">
        { this.renderLabel() }
        <input
          id={this.props.id}
          type="text"
          value={this.state.value}
          onChange={this.handleChange}
          placeholder={ this.renderPlaceholder() }
          className={ "input__field" + this.errorInputClass() }
          ref={this.inputField}
        />
        <div className={ "input__error" + this.errorTextClass() }>{this.state.errorMessage[0]}</div>
      </div>
    );
  }

}

Input.defaultProps = {
  label: '',
  placeholder: ''
};

Input.propTypes = {
  id: PropTypes.string.isRequired,
  label: PropTypes.string,
  placeholder: PropTypes.string,
  validate: PropTypes.string.isRequired,
  errorMessages: PropTypes.object.isRequired
};

export default Input;