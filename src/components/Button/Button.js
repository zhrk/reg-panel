import React from 'react';
import './Button.css';
import arrow from '../../images/Button/arrow.svg';

const Button = ({ text }) => {
  return (
    <button className="button">
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

export default Button;