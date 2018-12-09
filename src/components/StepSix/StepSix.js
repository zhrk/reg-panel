import React, { Component } from 'react';
import './StepSix.css';
import Title from '../Title/Title';
import SubTitle from '../SubTitle/SubTitle';
import Button from '../Button/Button';
import Input from '../Input/Input';
import Upload from '../Upload/Upload';
import Checkbox from '../Checkbox/Checkbox';
import SignatureCanvas from 'react-signature-canvas';

class StepSix extends Component {

  constructor(props) {
    super(props);

    this.systemNameInput = React.createRef();

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  

  handleSubmit(event) {
    event.preventDefault();
    this.props.setCurrentStep(7);
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
              <Input
                id="companyName"
                label="Наименование компании"
                placeholder="Афина"
                validate="min:2|max:20"
                errorMessages={{
                  min: 'Значение слишком короткое',
                  max: 'Значение слишком длинное'
                }}
              />
            </div>
            <div className="step-six__col">
              <Input
                id="companyName"
                label="ФИО представителя"
                placeholder="Афина"
                validate="min:2|max:20"
                errorMessages={{
                  min: 'Значение слишком короткое',
                  max: 'Значение слишком длинное'
                }}
              />
            </div>
            <div className="step-six__col">
              <Input
                id="companyName"
                label="Адрес представителя"
                placeholder="Афина"
                validate="min:2|max:20"
                errorMessages={{
                  min: 'Значение слишком короткое',
                  max: 'Значение слишком длинное'
                }}
              />
            </div>
          </div>
          <div className="step-six__row">
            <div className="step-six__col">
              <Input
                id="companyName"
                label="ИП"
                placeholder="Афина"
                validate="min:2|max:20"
                errorMessages={{
                  min: 'Значение слишком короткое',
                  max: 'Значение слишком длинное'
                }}
              />
            </div>
            <div className="step-six__col">
              <Input
                id="companyName"
                label="ИНН"
                placeholder="Афина"
                validate="min:2|max:20"
                errorMessages={{
                  min: 'Значение слишком короткое',
                  max: 'Значение слишком длинное'
                }}
              />
            </div>
            <div className="step-six__col">
              <Input
                id="companyName"
                label="ОГРН"
                placeholder="Афина"
                validate="min:2|max:20"
                errorMessages={{
                  min: 'Значение слишком короткое',
                  max: 'Значение слишком длинное'
                }}
              />
            </div>
          </div>
          <div className="step-six__row">
            <div className="step-six__col">
              <Input
                id="companyName"
                label="Банк"
                placeholder="Афина"
                validate="min:2|max:20"
                errorMessages={{
                  min: 'Значение слишком короткое',
                  max: 'Значение слишком длинное'
                }}
              />
            </div>
            <div className="step-six__col">
              <Input
                id="companyName"
                label="БИК"
                placeholder="Афина"
                validate="min:2|max:20"
                errorMessages={{
                  min: 'Значение слишком короткое',
                  max: 'Значение слишком длинное'
                }}
              />
            </div>
            <div className="step-six__col">
              <Input
                id="companyName"
                label="Корреспондентский счёт"
                placeholder="Афина"
                validate="min:2|max:20"
                errorMessages={{
                  min: 'Значение слишком короткое',
                  max: 'Значение слишком длинное'
                }}
              />
            </div>
          </div>
          <div className="step-six__row">
            <div className="step-six__col">
              <Upload
                label="Сканы паспорта: разворот и прописка"
                stateStatus="clear"
              />
            </div>
            <div className="step-six__col">
              <Upload
                label="Скан ИНН"
              />
            </div>
            <div className="step-six__col">
              <Upload
                label="Скан СНИЛС"
              />
            </div>
          </div>
          <div className="step-six__bottom">
            <div className="step-six__bottom-checkboxses">
              <div className="step-six__bottom-checkboxses-row">
                <Checkbox id="terms" />
                <div>Я соглашаюсь с 
                <a href="https://google.com"> условиями использования </a>
                и даю согласие на обработку персональных данных</div>
              </div>
              <div className="step-six__bottom-checkboxses-row">
                <Checkbox id="conditions" />
                <div>
                  Нажимая на эту кнопку я соглашаюсь с условиями
                  <a href="https://google.com"> договора </a> и
                  <a href="https://google.com"> приложения </a>
                </div>
              </div>
            </div>
            <div className="step-six__bottom-signature">
              <div className="step-six__bottom-signature-label">Поставьте вашу электронную подпись</div>
              <SignatureCanvas
                penColor='black'
                canvasProps={{
                  width: 376,
                  height: 104,
                  className: 'sigCanvas'
                }}
              />
            </div>
          </div>
          <Button text="Далее" />
        </form>
      </div>
    );
  }

}

export default StepSix;