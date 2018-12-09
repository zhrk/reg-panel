import React, { Component } from 'react';
import './StepSeven.css';
import Title from '../Title/Title';
import SubTitle from '../SubTitle/SubTitle';
import Button from '../Button/Button';

class StepSeven extends Component {

  constructor(props) {
    super(props);

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(event) {
    event.preventDefault();
    this.props.setCurrentStep(8);
  }

  render() {
    return (
      <div className="step-seven">
        <Title
          text="Подтверждение"
          previousStep={6}
          setCurrentStep={this.props.setCurrentStep}
        />
        <SubTitle text="Внимательно проверьте всю указанную информацию для запуска вашего сайта ниже" />
        <form className="step-seven__form" onSubmit={this.handleSubmit}>
          <Button text="Далее" />
        </form>
      </div>
    );
  }

}

export default StepSeven;