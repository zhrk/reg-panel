import React, { Component } from 'react';
import './StepEight.css';
import Title from '../Title/Title';
import SubTitle from '../SubTitle/SubTitle';
import Button from '../Button/Button';

class StepEight extends Component {

  constructor(props) {
    super(props);

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(event) {
    event.preventDefault();
    this.props.setCurrentStep(9);
  }

  render() {
    return (
      <div className="step-eight">
        <Title
          text="Оплата"
          previousStep={7}
          setCurrentStep={this.props.setCurrentStep}
        />
        <SubTitle text="Выберите способ оплаты и оплатите выбранный пакет франшизы" />
        <form className="step-eight__form" onSubmit={this.handleSubmit}>
          
          <Button text="Далее" />
        </form>
      </div>
    );
  }

}

export default StepEight;