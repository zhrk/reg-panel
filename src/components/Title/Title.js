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
      <div className="title__inner">
        { renderBackBtn () }
        <div className="title__text">
          <span>{text}</span>
          { renderStar() }
        </div>
      </div>
    </div>
  );

}

Title.propTypes = {
  text: PropTypes.string.isRequired,
  star: PropTypes.bool,
  previousStep: PropTypes.number.isRequired,
  setCurrentStep: PropTypes.func.isRequired
};

export default Title;