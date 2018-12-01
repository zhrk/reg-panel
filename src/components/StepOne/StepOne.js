import React from 'react';
import './StepOne.css';
import Title from '../Title/Title';
import SubTitle from '../SubTitle/SubTitle';

const StepOne = () => {
  return (
    <div className="step-one">
      <div className="step-one__inner">
        <Title
          text="Регистрация"
          previousStep={0}
        />
        <SubTitle text="Пройдите быструю регистрацию для оформления покупки франшизы" />
      </div>
    </div>
  );
}

export default StepOne;