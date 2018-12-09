import React, { Component } from 'react';
import './StepNine.css';
import Title from '../Title/Title';
import Button from '../Button/Button';
import success from '../../images/StepNine/success.png';

class StepNine extends Component {

  constructor(props) {
    super(props);

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(event) {
    event.preventDefault();
    this.props.setCurrentStep(10);
  }

  render() {
    return (
      <div className="step-nine">
        <Title
          text="Успешная оплата"
          previousStep={8}
          setCurrentStep={this.props.setCurrentStep}
        />
        <form className="step-nine__form" onSubmit={this.handleSubmit}>
          <div className="step-nine__form-img">
            <img src={success} alt="Успешно!" aria-hidden="true" />
          </div>
          <div className="step-nine__form-text">Ваша оплата прошла успешно,
          в течении 24 часов в рабочее время с вами свяжется ваш
          персональный менеджер и согласует дальнешие действия.
          В течении 3х недель ваш сайт и система будут готовы</div>
          <Button text="Далее" />
        </form>
      </div>
    );
  }

}

export default StepNine;