import React, { Component } from 'react';
import './StepFour.css';
import Title from '../Title/Title';
import SubTitle from '../SubTitle/SubTitle';
import Button from '../Button/Button';
import TotalPrice from '../TotalPrice/TotalPrice';
import Card from '../Card/Card';

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
          <div className="step-four__form-inner">
            <div className="step-four__title">Платежные системы <span>**</span></div>
            <div className="step-four__cards">
              <Card
                id="yandex"
                title="Яндекс Касса"
                img="yandex"
                info="Яндекс.Касса: простое подключение платежных систем для
                интернет-магазинов и любых других сайтов. Банковские карты:
                Visa, MasterCard и Maestro, «Мир», Яндекс.Деньги и другие способы оплаты."
              />
              <Card
                id="robokassa"
                title="Робокасса"
                img="robokassa"
                info="ROBOKASSA – сервис для организации приема платежей на сайте,
                интернет магазине и социальных сетях. Прием платежей осуществляется
                при минимальных комиссиях."
              />
            </div>
          </div>
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