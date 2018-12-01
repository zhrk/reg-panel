import React from 'react';
import './StepOne.css';
import Title from '../Title/Title';

const StepOne = () => {
  return (
    <div className="step-one">
      <div className="step-one__inner">
        <Title
          text="Регистрация"
          previousStep={0}
        />
      </div>
    </div>
  );
}

export default StepOne;