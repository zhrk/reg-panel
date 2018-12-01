import React from 'react';
import './Title.css';
import PropTypes from 'prop-types';
import arrow from '../../images/Title/arrow.svg';

const Title = ({ text, star }) => {

  const renderStar = () => {
    if (star === true) {
      return (
        <div className="title__text-star">*</div>
      );
    }
  }

  return (
    <div className="title">
      <div className="title__back">
        <img src={arrow} alt="Назад" aria-hidden="true" />
        <span>Назад</span>
      </div>
      <div className="title__text">
        <span>{text}</span>
        { renderStar() }
      </div>
    </div>
  );

}

Title.propTypes = {
  text: PropTypes.string.isRequired,
  star: PropTypes.bool
};

export default Title;