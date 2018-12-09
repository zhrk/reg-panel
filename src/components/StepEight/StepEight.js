import React, { Component } from 'react';
import './StepEight.css';
import Title from '../Title/Title';
import SubTitle from '../SubTitle/SubTitle';
import PayWay from '../PayWay/PayWay';

class StepEight extends Component {

  constructor(props) {
    super(props);

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
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
        <form className="step-eight__form">
          <div className="step-eight__form-total-price">Итого к оплате: <span>$21 990</span></div>
          <div className="step-eight__form-pay-payways">
            <PayWay
              title="Оплата картой"
              img="visa"
              handler={this.handleClick}
            />
            <PayWay
              title="Оплата PayPal"
              img="paypal"
              handler={this.handleClick}
            />
            <PayWay
              title="Запросить счет на оплату"
              img="bill"
              info="*данный тип платежа будет обработан в ручном режиме"
              handler={this.handleClick}
            />
          </div>
        </form>
      </div>
    );
  }

}

export default StepEight;