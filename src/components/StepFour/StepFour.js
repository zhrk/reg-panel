import React, { Component } from 'react';
import './StepFour.css';
import Title from '../Title/Title';
import SubTitle from '../SubTitle/SubTitle';
import Button from '../Button/Button';
import TotalPrice from '../TotalPrice/TotalPrice';

class StepFour extends Component {

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
      <div className="step-four">
        <Title
          text="Интеграции"
          previousStep={3}
          setCurrentStep={this.props.setCurrentStep}
          star={true}
        />
        <SubTitle text="Выберите онлайн-систему поддержки для своих клиентов
        и платежную систему, которую вы будете использовать для приема оплаты от клиентов на своем сайте" />
        <form className="step-four__form" onSubmit={this.handleSubmit}>
          <div className="step-four__form-bottom">
            <div className="step-four__form-bottom-inner">
              <TotalPrice value={0} />
              <Button text="Далее" />
            </div>
          </div>
        </form>
      </div>
    );
  }

}

export default StepFour;