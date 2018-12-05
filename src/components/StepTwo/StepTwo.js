import React from 'react';
import './StepTwo.css';
import Title from '../Title/Title';
import SubTitle from '../SubTitle/SubTitle';
import Button from '../Button/Button';
import Document from '../Document/Document';

const StepTwo = ({ setCurrentStep }) => {

  const handleSubmit = (event) => {
    event.preventDefault();
    setCurrentStep(3);
  }

  return (
    <div className="step-two">
      <Title
        text="Промо Материалы"
        previousStep={1}
        setCurrentStep={setCurrentStep}
      />
      <SubTitle text="Ознакомьтесь с нашими промо-материалами и внимательно изучите презентацию
      франшизы и все дополнительные материалы и инструкции, опубликованные на этой странице" />
      <form className="step-two__form" onSubmit={handleSubmit}>
        <div className="step-two__docs">
          <Document
            title="Презентация франшизы"
            docType="PDF"
            link="https://twitter.com"
            background="green"
          />
          <Document
            title="План запуска франшизы"
            docType="PDF"
            link="https://youtube.com"
            background="orange"
          />
        </div>
        <div className="step-two__form-bottom">
          <Button text="Далее" />
        </div>
      </form>
    </div>
  );

}

export default StepTwo;