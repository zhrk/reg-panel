import React, { Component } from 'react';
import './Select.css';
import PropTypes from 'prop-types';
import Option from '../Option/Option';

class Select extends Component {

  constructor(props) {
    super(props);

    this.state = {
      selectedOption: null
    };

    this.inputField = React.createRef();

    this.selectOption = this.selectOption.bind(this);
  }

  selectOption(event) {
    this.setState({
      selectedOption: event.target.value
    }, () => {
      console.log(this.state.selectedOption);
    });
  }

  renderOptionsList() {
    const optionsList = this.props.options.map(function(item, index) {
      return (
        <Option
          key={'option-id-' + index}
          value={item.value}
          title={item.title}
          handler={this.selectOption}
        />
      );
    }, this);

    return optionsList;
  }

  validate() {
    if (this.state.selectedOption === null) {

      return {
        id: this.props.name,
        value: this.props.options[0].value
      };

    } else {
      return {
        id: this.props.name,
        value: this.state.selectedOption
      };
    }

  }

  render() {
    return (
      <div className="select" ref={this.inputField}>
        <div className="select__label">{this.props.label}</div>
        <select className="select__field" onChange={this.selectOption}>
          { this.renderOptionsList() }
        </select>
      </div>
    );
  }

}

Select.propTypes = {
  label: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  options: PropTypes.array.isRequired
};

export default Select;