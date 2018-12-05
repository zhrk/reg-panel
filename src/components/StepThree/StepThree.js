import React from 'react';
import './StepThree.css';
import Title from '../Title/Title';
import SubTitle from '../SubTitle/SubTitle';
import Button from '../Button/Button';
import TotalPrice from '../TotalPrice/TotalPrice';

const StepThree = ({ setCurrentStep }) => {

  const handleSubmit = (event) => {
    event.preventDefault();

    console.log('submit');
  }

  return (
    <div className="step-three">
      <Title
        text="Тариф Франшизы"
        previousStep={2}
        setCurrentStep={setCurrentStep}
      />
      <SubTitle text="Выберите подходящий для вас тариф франшизы" />
      <form className="step-three__form" onSubmit={handleSubmit}>
        
        <div className="step-three__form-bottom">
          <div className="step-three__form-bottom-inner">
            <TotalPrice value={0} />
            <Button text="Далее" />
          </div>
        </div>
      </form>
    </div>
  );

}

export default StepThree;