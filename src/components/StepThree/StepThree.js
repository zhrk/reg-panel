import React, { Component } from 'react';
import './StepThree.css';
import Title from '../Title/Title';
import SubTitle from '../SubTitle/SubTitle';
import Button from '../Button/Button';
import TotalPrice from '../TotalPrice/TotalPrice';
import Rate from '../Rate/Rate';

class StepThree extends Component {

  constructor(props) {
    super(props);

    this.state = {
      selectedRate: null
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.selectRate = this.selectRate.bind(this);
  }

  handleSubmit(event) {
    event.preventDefault();

    if (this.state.selectedRate !== null) {
      console.log('opa');
    }

  }

  selectRate(name) {
    this.setState({
      selectedRate: name
    });
  }

  render() {
    return (
      <div className="step-three">
        <Title
          text="Тариф Франшизы"
          previousStep={2}
          setCurrentStep={this.props.setCurrentStep}
        />
        <SubTitle text="Выберите подходящий для вас тариф франшизы" />
        <form className="step-three__form" onSubmit={this.handleSubmit}>
          <div className="step-three__form-rates">
            <Rate
              id="business"
              title="Business"
              borderColor="#43CEA4"
              price={2190}
              handler={this.selectRate}
              features={[
                'Instalex platform Integration',
                'SSL setificate “Let’s Encrypt”',
                'Hosting',
                'Auto/Manual payments Integration',
                'Control Panel for main domain',
                'Admin Panel for system on subdomain',
                'All sections',
                'Zendesk/Jivosite Integration',
                '$100 included on Dealer Balance'
              ]}
              pricing={[
                {
                  title: 'Promo module',
                  value: '6'
                },
                {
                  title: 'Direct module',
                  value: '6'
                },
                {
                  title: 'Comments module',
                  value: '6'
                },
                {
                  title: 'Posting module',
                  value: '6'
                }
              ]}
            />
            <Rate
              id="pro"
              title="Pro"
              borderColor="#F1D858"
              price={21990}
              handler={this.selectRate}
              features={[
                'All Features of “Business” Package',
                '4 Promo videos Included',
                '6 Video Instructions for clients Included',
                'amoCRM Integration Included',
                'Knoledge Base with 100+ articles Included',
                '$500 included on Dealer Balance'
              ]}
              pricing={[
                {
                  title: 'Promo module',
                  value: '4.5'
                },
                {
                  title: 'Direct module',
                  value: '4.5'
                },
                {
                  title: 'Comments module',
                  value: '4.5'
                },
                {
                  title: 'Posting module',
                  value: '4.5'
                }
              ]}
            />
            <Rate
              id="elite"
              title="Elite"
              borderColor="#F15858"
              price={50990}
              handler={this.selectRate}
              features={[
                'All Features of “Business” and “Pro” Package',
                '2 System Integration',
                'Google Adwords Setup',
                'Remarketing Setup',
                'Quora marketing Setup',
                'Instagram marketing Setup',
                '$3000 included on Dealer Balance'
              ]}
              pricing={[
                {
                  title: 'Promo module',
                  value: '2.8'
                },
                {
                  title: 'Direct module',
                  value: '4'
                },
                {
                  title: 'Comments module',
                  value: '4'
                },
                {
                  title: 'Posting module',
                  value: '4'
                }
              ]}
            />
          </div>
          <div className="step-three__form-bottom">
            <div className="step-three__form-bottom-inner">
              <TotalPrice value={0} />
              <Button text="Далее" />
            </div>
          </div>
        </form>
      </div>
    );
  }

}

export default StepThree;