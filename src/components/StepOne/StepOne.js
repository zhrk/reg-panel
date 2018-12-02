import React from 'react';
import './StepOne.css';
import Title from '../Title/Title';
import SubTitle from '../SubTitle/SubTitle';
import Input from '../Input/Input';

const StepOne = () => {
  return (
    <div className="step-one">
      <Title
        text="Регистрация"
        previousStep={0}
      />
      <SubTitle text="Пройдите быструю регистрацию для оформления покупки франшизы" />
      <form className="step-one__form">
        <Input />
      </form>
    </div>
  );
}

export default StepOne;