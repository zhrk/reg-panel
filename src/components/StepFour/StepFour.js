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

    this.state = {
      payWay: [],
      buttonIsDisabled: false
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.select = this.select.bind(this);
  }

  handleSubmit(event) {
    event.preventDefault();

    if (this.state.payWay.length !== 0) {
      this.props.setPayWay(this.state.payWay);
      this.props.setCurrentStep(5);
    } else {
      this.setState({
        buttonIsDisabled: true
      });
    }

  }

  componentDidMount() {
    window.scrollTo(0, 0);
  }

  select(payWay) {
    let tempArray = this.state.payWay;
    
    if (this.state.payWay.indexOf(payWay) === -1) {
      tempArray.push(payWay);

      this.setState({
        payWay: tempArray,
        buttonIsDisabled: false
      });

    } else {
      this.state.payWay.forEach((element, index) => {
        if (element === payWay) {
          tempArray.splice(index, 1);

          if (tempArray.length === 0) {
            this.setState({
              payWay: tempArray,
              buttonIsDisabled: true
            });
          } else {
            this.setState({
              payWay: tempArray
            });
          }

        }
      });
    }

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
                handler={this.select}
                info="Яндекс.Касса: простое подключение платежных систем для
                интернет-магазинов и любых других сайтов. Банковские карты:
                Visa, MasterCard и Maestro, «Мир», Яндекс.Деньги и другие способы оплаты."
              />
              <Card
                id="robokassa"
                title="Робокасса"
                img="robokassa"
                handler={this.select}
                info="ROBOKASSA – сервис для организации приема платежей на сайте,
                интернет магазине и социальных сетях. Прием платежей осуществляется
                при минимальных комиссиях."
              />
              <Card
                id="paypal"
                title="PayPal"
                img="paypal"
                handler={this.select}
                info="Совершать денежные переводы и принимать онлайн-платежи с помощью
                PayPal просто и безопасно — как для личных целей, так и для бизнеса."
              />
              <Card
                id="stripe"
                title="Stripe"
                img="stripe"
                handler={this.select}
                info="Online payment processing for internet businesses. Stripe is a suite
                of payment APIs that powers commerce for online businesses of all sizes,
                including fraud prevention, and subscription management. Use Stripe’s
                payment platform to accept and process payments online for easy-to-use
                commerce solutions."
              />
              <Card
                id="walletone"
                title="Wallet One"
                img="walletone"
                handler={this.select}
                info="Прием платежей на сайте — подключите сегодня и принимайте банковские
                карты, электронные деньги,  наличные и другие способы. Тарифы и инструкция
                по подключению."
              />
              <Card
                id="freekassa"
                title="Free-kassa"
                img="freekassa"
                handler={this.select}
                info="Электронный платежный сервис. Подключение приема платежей на сайте:
                банковские карты (эквайринг), интернет-банки и другие способы оплаты."
              />
            </div>
            <div className="step-four__title">Поддержка клиентов</div>
            <div className="step-four__cards">
              <Card
                id="amocrm"
                title="amoCRM"
                img="amocrm"
                disabled={true}
                info="Система amoCRM – удобная web программа для анализа продаж, доступная
                в режиме online из любой точки мира! Подробности узнавайте по указанным
                на сайте телефонам в Москве."
              />
              <Card
                id="zendesk"
                title="Zendesk"
                img="zendesk"
                disabled={true}
                info="ПО для обслуживания клиентов и система поддержки на основе тикетов
                от Zendesk. Облачное решение для служб поддержки, которым пользуются
                более 200 000 организаций во всем мире. Бесплатное 30-дневное ознакомление."
              />
              <Card
                id="jivosite"
                title="Jivosite"
                img="jivosite"
                disabled={true}
                info="Онлайн консультант для Вашего сайта. Установка за 5 минут, звонки
                с сайта, есть бесплатная версия! Увеличивает конверсию и продажи!"
              />
              <Card
                id="sendpulse"
                title="SendPulse"
                img="sendpulse"
                disabled={true}
                info="SendPulse - единая платформа для email рассылок, SMS, web push
                уведомлений и транзакционных писем."
              />
            </div>
            <div className="step-four__title">Системные интеграции</div>
            <div className="step-four__cards">
              <Card
                id="design"
                title="Дизайн cайта"
                img="design"
                disabled={true}
                info="SendPulse - единая платформа для email рассылок, SMS, web push
                уведомлений и транзакционных писем."
                addInfo="$1000"
              />
              <Card
                id="webdev"
                title="Веб-разработка"
                img="webdev"
                disabled={true}
                info="SendPulse - единая платформа для email рассылок, SMS, web push
                уведомлений и транзакционных писем."
                addInfo="$35/час"
              />
              <Card
                id="copy"
                title="Копия системы"
                img="copy"
                disabled={true}
                info="SendPulse - единая платформа для email рассылок, SMS, web push
                уведомлений и транзакционных писем."
                addInfo="$300"
              />
              <Card
                id="translates"
                title="Переводы"
                img="translates"
                disabled={true}
                info="SendPulse - единая платформа для email рассылок, SMS, web push
                уведомлений и транзакционных писем."
                addInfo="$1/слово"
              />
            </div>
            <div className="step-four__form-info">
              <p>* Все интеграции входят в стоимость любого пакета франшизы.</p>
              <p>** Возможно подключить только 1 платежную систему, дополнительная
              платежная система будет стоить + $100 к стоимости выбранного пакета франшизы</p>
            </div>
          </div>
          <div className="step-four__form-bottom">
            <div className="step-four__form-bottom-inner">
              <TotalPrice value={0} />
              <Button text="Далее" disabled={this.state.buttonIsDisabled} />
            </div>
          </div>
        </form>
      </div>
    );
  }

}

export default StepFour;