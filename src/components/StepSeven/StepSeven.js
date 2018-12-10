import React, { Component } from 'react';
import './StepSeven.css';
import Title from '../Title/Title';
import SubTitle from '../SubTitle/SubTitle';
import Button from '../Button/Button';
import Document from '../Document/Document';

class StepSeven extends Component {

  constructor(props) {
    super(props);

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount() {
    window.scrollTo(0, 0);
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
          <div className="step-seven__title"><div>Основное</div></div>
          <div className="step-seven__row">
            <div className="step-seven__col">
              <div className="step-seven__info">
                <div className="step-seven__info-title">Тариф франшизы:</div>
                <div className="step-seven__info-text">{this.props.user.rate}</div>
              </div>
            </div>
            <div className="step-seven__col">
              <div className="step-seven__info">
                <div className="step-seven__info-title">Интеграции:</div>
                <div className="step-seven__info-text">PayPal, Jivosite</div>
              </div>
            </div>
          </div>
          <div className="step-seven__title"><div>Бриф</div></div>
          <div className="step-seven__row">
            <div className="step-seven__col">
              <div className="step-seven__info">
                <div className="step-seven__info-title">The name of the system:</div>
                <div className="step-seven__info-text">SomeName</div>
              </div>
              <div className="step-seven__info">
                <div className="step-seven__info-title">Domain name:</div>
                <div className="step-seven__info-text">SomeName</div>
              </div>
              <div className="step-seven__info">
                <div className="step-seven__info-title">Subdomain:</div>
                <div className="step-seven__info-text">App</div>
              </div>
            </div>
            <div className="step-seven__col">
              <div className="step-seven__info">
                <div className="step-seven__info-title">Account:</div>
                <div className="step-seven__info-text">simple123@mail.com</div>
              </div>
              <div className="step-seven__info">
                <div className="step-seven__info-title">Contacts:</div>
                <div className="step-seven__info-text">simple123@mail.com</div>
              </div>
            </div>
            <div className="step-seven__col">
              <div className="step-seven__info">
                <div className="step-seven__info-title">Instagram:</div>
                <div className="step-seven__info-text">Link</div>
              </div>
              <div className="step-seven__info">
                <div className="step-seven__info-title">Facebook:</div>
                <div className="step-seven__info-text">Link</div>
              </div>
              <div className="step-seven__info">
                <div className="step-seven__info-title">YouTube:</div>
                <div className="step-seven__info-text">Link</div>
              </div>
            </div>
            <div className="step-seven__col">
              <div className="step-seven__info">
                <div className="step-seven__info-title">Telegram:</div>
                <div className="step-seven__info-text">Link</div>
              </div>
              <div className="step-seven__info">
                <div className="step-seven__info-title">Custom link:</div>
                <div className="step-seven__info-text">Link</div>
              </div>
            </div>
          </div>
          <div className="step-seven__row">
            <div className="step-seven__col">
              <div className="step-seven__info">
                <div className="step-seven__info-title">The name of the system:</div>
                <div className="step-seven__info-text">SomeName</div>
              </div>
            </div>
            <div className="step-seven__col">
              <div className="step-seven__info">
                <div className="step-seven__info-title">Language:</div>
                <div className="step-seven__info-text">English</div>
              </div>
            </div>
            <div className="step-seven__col">
              <div className="step-seven__info">
                <div className="step-seven__info-title">Currency:</div>
                <div className="step-seven__info-text">$ USD</div>
              </div>
            </div>
            <div className="step-seven__col">
              <div className="step-seven__info">
                <div className="step-seven__info-title">Payment system:</div>
                <div className="step-seven__info-text">PayPal, ЯндексКасса</div>
              </div>
            </div>
          </div>
          <div className="step-seven__title"><div>Договор</div></div>
          <div className="step-seven__row">
            <div className="step-seven__col">
              <div className="step-seven__info">
                <div className="step-seven__info-title">Наименование компании:</div>
                <div className="step-seven__info-text">SomeName</div>
              </div>
            </div>
            <div className="step-seven__col">
              <div className="step-seven__info">
                <div className="step-seven__info-title">ИП:</div>
                <div className="step-seven__info-text">SomeName</div>
              </div>
            </div>
            <div className="step-seven__col">
              <div className="step-seven__info">
                <div className="step-seven__info-title">Банк:</div>
                <div className="step-seven__info-text">SomeName</div>
              </div>
            </div>
            <div className="step-seven__col">
              <div className="step-seven__info">
                <div className="step-seven__info-title">ИНН:</div>
                <div className="step-seven__info-text">SomeName</div>
              </div>
            </div>
          </div>
          <div className="step-seven__docs">
            <div className="step-seven__docs-title">Готовые договора:</div>
            <div>
              <Document
                title="Договор №82294216"
                docType="PDF"
                link="https://youtube.com"
              />
              <Document
                title="Договор №822942152"
                docType="PDF"
                link="https://youtube.com"
              />
            </div>
          </div>
          <Button text="Далее" />
        </form>
      </div>
    );
  }

}

export default StepSeven;