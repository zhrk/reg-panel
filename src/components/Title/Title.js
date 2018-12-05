import React from 'react';
import './Title.css';
import PropTypes from 'prop-types';
import arrow from '../../images/Title/arrow.svg';

const Title = ({ text, star, previousStep, setCurrentStep }) => {

  const goToPreviousStep = () => {
    setCurrentStep(previousStep);
  }

  const renderBackBtn = () => {
    if (previousStep !== 0) {
      return (
        <div className="title__back" onClick={goToPreviousStep}>
          <img src={arrow} alt="Назад" aria-hidden="true" />
          <span>Назад</span>
        </div>
      );
    }
  }

  const renderStar = () => {
    if (star === true) {
      return (
        <div className="title__text-star">*</div>
      );
    }
  }

  return (
    <div className="title">
      { renderBackBtn () }
      <div className="title__text">
        <span>{text}</span>
        { renderStar() }
      </div>
    </div>
  );

}

Title.propTypes = {
  previousStep: PropTypes.number.isRequired,
  text: PropTypes.string.isRequired,
  star: PropTypes.bool
};

export default Title;