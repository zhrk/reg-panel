import React, { Component } from 'react';
import './StepFive.css';
import Title from '../Title/Title';
import SubTitle from '../SubTitle/SubTitle';
import Button from '../Button/Button';
import Input from '../Input/Input';
import Tabs from '../Tabs/Tabs';
import Select from '../Select/Select';

class StepFive extends Component {

  constructor(props) {
    super(props);

    this.systemNameInput = React.createRef();
    this.domainNameInput = React.createRef();
    this.subDomainTypeInput = React.createRef();
    this.instalexEmailInput = React.createRef();
    this.supportPhoneInput = React.createRef();
    this.supportEmailInput = React.createRef();
    this.socialInstagramInput = React.createRef();
    this.socialFacebookInput = React.createRef();
    this.socialYouTubeInput = React.createRef();
    this.socialTelegramInput = React.createRef();
    this.socialCustomInput = React.createRef();
    this.primaryLanguageInput = React.createRef();
    this.primaryСurrencyInput = React.createRef();

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(event) {
    event.preventDefault();

    /* TODO 
      The code below is universal enough to be taken out in a separate module,
      but need to think of a way to connect it with other types of inputs.
    */

    let fields = [
      'systemName',
      'domainName',
      'subDomainType',
      'instalexEmail',
      'supportPhone',
      'supportEmail',
      'socialInstagram',
      'socialFacebook',
      'socialYouTube',
      'socialTelegram',
      'socialCustom',
      'primaryLanguage',
      'primaryСurrency'
    ];

    let response = [];
    let errors = [];

    fields.forEach(element => {
      response.push(this[element + 'Input'].current.validate());
    });

    response.forEach(element => {
      errors.push(element.error);
    });

    if (errors.indexOf(true) === -1) {
      let data = {};

      response.forEach(element => {
        data[element['id']] = {
          value: element['value']
        };
      });

      this.props.setCurrentStep(6);

    } else {
      // focus() on first fields[] el if errors length > 0
      for (let index = 0; index < response.length; index++) {
        if (response[index].error === true) {
          let inputComponent = this[response[index].id + 'Input'].current;
          let inputField = inputComponent.inputField.current;
          inputField.focus();
          break;
        }
      }
    }

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
          <div className="step-five__row">
            <div className="step-five__col">
              <Input
                id="systemName"
                label="Название системы"
                placeholder="Афина"
                inputInfo="Будет отображаться повсюду на сайте"
                validate="min:2|max:20"
                errorMessages={{
                  min: 'Название системы слишком короткое',
                  max: 'Название системы слишком длинное'
                }}
                ref={this.systemNameInput}
              />
            </div>
            <div className="step-five__col">
              <Input
                id="domainName"
                label="Название домена"
                placeholder="Афина"
                inputInfo="На котором вы хотите запустить систему"
                validate="min:2|max:20"
                errorMessages={{
                  min: 'Название домена слишком короткое',
                  max: 'Название домена слишком длинное'
                }}
                ref={this.domainNameInput}
              />
            </div>
            <div className="step-five__col">
              <Tabs
                title="Выберите поддомен"
                name="subDomainType"
                tabs={[
                  {
                    title: 'App',
                    id: 'app'
                  },
                  {
                    title: 'System',
                    id: 'system'
                  },
                  {
                    title: 'Panel',
                    id: 'panel'
                  }
                ]}
                info={[
                  {
                    title: 'App',
                    description: 'some description some description'
                  },
                  {
                    title: 'System',
                    description: 'some description some description'
                  },
                  {
                    title: 'Panel',
                    description: 'some description some description'
                  }
                ]}
                subInfo="На которой вы хотите запустить систему
                (поддомен должен отличаться от основной системы)"
                ref={this.subDomainTypeInput}
              />
            </div>
          </div>
          <div className="step-five__row">
            <div className="step-five__col">
              <Input
                id="instalexEmail"
                label="Аккаунт (почта) в instalex.pro"
                placeholder="example@mail.com"
                validate="email"
                errorMessages={{
                  email: 'Неверный формат почты'
                }}
                ref={this.instalexEmailInput}
              />
            </div>
            <div className="step-five__col">
              <Input
                id="supportPhone"
                label="Контакты для страницы поддержки"
                placeholder="Номер телефона"
                validate="min:9|max:14"
                errorMessages={{
                  min: 'Номер телефона слишком короткий',
                  max: 'Номер телефона слишком длинный'
                }}
                ref={this.supportPhoneInput}
              />
              <Input
                id="supportEmail"
                placeholder="Почта"
                validate="email"
                errorMessages={{
                  email: 'Неверный формат почты'
                }}
                ref={this.supportEmailInput}
              />
            </div>
            <div className="step-five__col">
              <Input
                id="socialInstagram"
                label="Ссылки на социальную сеть"
                placeholder="Instagram"
                validate="min:9|max:100"
                errorMessages={{
                  min: 'Ссылка слишком короткая',
                  max: 'Ссылка слишком длинная'
                }}
                ref={this.socialInstagramInput}
              />
              <Input
                id="socialFacebook"
                placeholder="Facebook"
                validate="min:9|max:100"
                errorMessages={{
                  min: 'Ссылка слишком короткая',
                  max: 'Ссылка слишком длинная'
                }}
                ref={this.socialFacebookInput}
              />
              <Input
                id="socialYouTube"
                placeholder="YouTube"
                validate="min:4|max:100"
                errorMessages={{
                  min: 'Ссылка слишком короткая',
                  max: 'Ссылка слишком длинная'
                }}
                ref={this.socialYouTubeInput}
              />
              <Input
                id="socialTelegram"
                placeholder="Telegram"
                validate="min:4|max:100"
                errorMessages={{
                  min: 'Ссылка слишком короткая',
                  max: 'Ссылка слишком длинная'
                }}
                ref={this.socialTelegramInput}
              />
              <Input
                id="socialCustom"
                placeholder="Другая ссылка"
                validate="min:4|max:100"
                errorMessages={{
                  min: 'Ссылка слишком короткая',
                  max: 'Ссылка слишком длинная'
                }}
                inputInfo="Будут размещены в подвале вашего сайта"
                ref={this.socialCustomInput}
              />
            </div>
          </div>
          <div className="step-five__row">
            <div className="step-five__col">
              <Select
                label="Основной язык для системы"
                name="primaryLanguage"
                ref={this.primaryLanguageInput}
                options={[
                  {
                    title: 'English',
                    value: 'english'
                  },
                  {
                    title: 'Spanish',
                    value: 'spanish'
                  },
                  {
                    title: 'Chinese',
                    value: 'chinese'
                  },
                  {
                    title: 'Japanese',
                    value: 'japanese'
                  }
                ]}
              />
            </div>
            <div className="step-five__col">
              <Select
                label="Основная валюта для системы"
                name="primaryСurrency"
                ref={this.primaryСurrencyInput}
                options={[
                  {
                    title: 'Доллар',
                    value: 'USD'
                  },
                  {
                    title: 'Евро',
                    value: 'EUR'
                  }
                ]}
              />
            </div>
          </div>
          <Button text="Далее" />
        </form>
      </div>
    );
  }

}

export default StepFive;