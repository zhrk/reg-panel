import React from 'react';
import './StepOne.css';
import Title from '../Title/Title';
import SubTitle from '../SubTitle/SubTitle';

const StepOne = () => {
  return (
    <div className="step-one">
      <Title
        text="Регистрация"
        previousStep={0}
      />
      <SubTitle text="Пройдите быструю регистрацию для оформления покупки франшизы" />
      <form className="step-one__form">
        123
      </form>
    </div>
  );
}

export default StepOne;