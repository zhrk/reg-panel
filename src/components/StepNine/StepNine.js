import React, { Component } from 'react';
import './StepNine.css';
import Title from '../Title/Title';
import Button from '../Button/Button';

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
          
          <Button text="Далее" />
        </form>
      </div>
    );
  }

}

export default StepNine;