import React, { Component } from 'react';
import './StepSix.css';
import Title from '../Title/Title';
import SubTitle from '../SubTitle/SubTitle';
import Button from '../Button/Button';
import Input from '../Input/Input';

class StepSix extends Component {

  constructor(props) {
    super(props);

    this.systemNameInput = React.createRef();

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(event) {
    event.preventDefault();

    /* TODO 
      The code below is universal enough to be taken out in a separate module,
      but need to think of a way to connect it with other types of inputs.
    */

    let fields = [
      'systemName'
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

      console.log(data);

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
      <div className="step-six">
        <Title
          text="Договор"
          previousStep={5}
          setCurrentStep={this.props.setCurrentStep}
        />
        <SubTitle text="Заполните все поля и внимательно ознакомьтесь с
        нашим договором франшизы и приложением к нему. Отметьте свое
        согласие с договором, после чего вы сможете перейти к следующему этапу" />
        <form className="step-six__form" onSubmit={this.handleSubmit}>
          <div className="step-six__row">
            <div className="step-six__col">
              <Input />
            </div>
          </div>
          <Button text="Далее" />
        </form>
      </div>
    );
  }

}

export default StepSix;