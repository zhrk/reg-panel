import React, { Component } from 'react';
import './StepTen.css';
import Title from '../Title/Title';
import telegram from '../../images/StepTen/telegram.png'
import link from '../../images/StepTen/link.png'

class StepTen extends Component {

  constructor(props) {
    super(props);

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(event) {
    event.preventDefault();
    console.log('finish');
  }

  render() {
    return (
      <div className="step-ten">
        <Title
          text="Контакты"
          previousStep={9}
          setCurrentStep={this.props.setCurrentStep}
        />
        <form className="step-ten__form" onSubmit={this.handleSubmit}>
          <div className="step-ten__form-info">
            <div className="step-ten__form-text">Подпишитесь на наш закрытый
            телеграм канал для действующих дилеров:</div>
            <div className="step-ten__form-links">
              <a href="https://google.com">
                <img src={telegram} alt="Телеграм" />
              </a>
              <a href="https://google.com">
                <img src={link} alt="Ссылка" />
              </a>
            </div>
          </div>
          <div className="step-ten__form-info">
            <div className="step-ten__form-text">Подпишитесь на наш закрытый телеграм канал
            с инструкциями:</div>
            <div className="step-ten__form-links">
              <a href="https://google.com">
                <img src={telegram} alt="Телеграм" />
              </a>
              <a href="https://google.com">
                <img src={link} alt="Ссылка" />
              </a>
            </div>
          </div>
        </form>
      </div>
    );
  }

}

export default StepTen;