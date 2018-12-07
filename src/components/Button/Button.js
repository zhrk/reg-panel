import React from 'react';
import './Button.css';
import arrow from '../../images/Button/arrow.svg';
import PropTypes from 'prop-types';

const Button = ({ text, disabled }) => {

  const renderDisabledAttribute = () => {
    if (disabled === true) {
      return 'disabled';
    } else {
      return null;
    }
  }

  return (
    <button className="button" disabled={ renderDisabledAttribute() }>
      {text}
      <img
        src={arrow}
        alt="Стрелка вправо"
        className="button__arrow"
        aria-hidden="true"
      />
    </button>
  );

}

Button.defaultProps = {
  disabled: false
};

Button.propTypes = {
  text: PropTypes.string.isRequired,
  disabled: PropTypes.bool
};

export default Button;