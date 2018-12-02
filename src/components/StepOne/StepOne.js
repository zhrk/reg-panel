import React, { Component } from 'react';
import './StepOne.css';
import Title from '../Title/Title';
import SubTitle from '../SubTitle/SubTitle';
import Input from '../Input/Input';

class StepOne extends Component {

  constructor(props) {
    super(props);

    this.nameInput = React.createRef();

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(event) {
    event.preventDefault();

    console.log(this.nameInput.current.validate());
  }

  render() {
    return (
      <div className="step-one">
        <Title
          text="Регистрация"
          previousStep={0}
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
          <button>Далее</button>
        </form>
      </div>
    );
  }

}

export default StepOne;