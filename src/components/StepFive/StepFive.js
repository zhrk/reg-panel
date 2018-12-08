import React, { Component } from 'react';
import './StepFive.css';
import Title from '../Title/Title';
import SubTitle from '../SubTitle/SubTitle';
import Button from '../Button/Button';
import Input from '../Input/Input';
import Tabs from '../Tabs/Tabs';

class StepFive extends Component {

  constructor(props) {
    super(props);

    this.systemNameInput = React.createRef();
    this.domainNameInput = React.createRef();
    this.subDomainTypeInput = React.createRef();

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
      'domainName'
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

      console.log('nice');

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
                subInfo="На которой вы хотите запустить систему
                (поддомен должен отличаться от основной системы)"
                ref={this.subDomainTypeInput}
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