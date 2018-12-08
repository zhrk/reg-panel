import React, { Component } from 'react';
import './StepFive.css';
import Title from '../Title/Title';
import SubTitle from '../SubTitle/SubTitle';
import Button from '../Button/Button';

class StepFive extends Component {

  constructor(props) {
    super(props);

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(event) {
    event.preventDefault();

    console.log('submit');
  }

  render() {
    return (
      <div className="step-five">
        <Title
          text="Бриф"
          previousStep={4}
          setCurrentStep={this.props.setCurrentStep}
        />
        <SubTitle text="Внимательно заполните все поля в брифе для запуска
        вашего сайта, обязательные поля отмечены красным цветом" />
        <form className="step-five__form" onSubmit={this.handleSubmit}>
          
          <Button text="Далее" />
        </form>
      </div>
    );
  }

}

export default StepFive;