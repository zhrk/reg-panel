import React, { Component } from 'react';
import './StepOne.css';
import Title from '../Title/Title';
import SubTitle from '../SubTitle/SubTitle';
import Input from '../Input/Input';
import Button from '../Button/Button';

class StepOne extends Component {

  constructor(props) {
    super(props);

    this.nameInput = React.createRef();
    this.emailInput = React.createRef();

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(event) {
    event.preventDefault();

    /* TODO 
      The code below is universal enough to be taken out in a separate module,
      but need to think of a way to connect it with other types of inputs.
    */

    let fields = [
      'name',
      'email'
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

      this.props.setCurrentStep(2);

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
      <div className="step-one">
        <Title
          text="Регистрация"
          previousStep={0}
          setCurrentStep={this.props.setCurrentStep}
        />
        <SubTitle text="Пройдите быструю регистрацию для оформления покупки франшизы" />
        <form className="step-one__form" onSubmit={this.handleSubmit}>
          <Input
            id="name"
            label="Имя"
            placeholder="Афина"
            validate="min:2|max:20"
            errorMessages={{
              min: 'Имя слишком короткое',
              max: 'Имя слишком длинное'
            }}
            ref={this.nameInput}
          />
          <Input
            id="email"
            label="Почта"
            placeholder="example@mail.com"
            validate="email"
            errorMessages={{
              email: 'Неверный формат почты'
            }}
            ref={this.emailInput}
          />
          <div className="step-one__form-bottom">
            <Button text="Далее" />
          </div>
        </form>
      </div>
    );
  }

}

export default StepOne;