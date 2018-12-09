import React, { Component } from 'react';
import './StepTen.css';
import Title from '../Title/Title';
import Button from '../Button/Button';

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
          
          <Button text="Далее" />
        </form>
      </div>
    );
  }

}

export default StepTen;