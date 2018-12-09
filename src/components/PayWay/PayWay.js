import React, { Component } from 'react';
import './PayWay.css';
import PropTypes from 'prop-types';
import visa from '../../images/PayWay/visa.png';
import paypal from '../../images/PayWay/paypal.png';
import bill from '../../images/PayWay/bill.png';

class PayWay extends Component {

  constructor(props) {
    super(props);

    this.select = this.select.bind(this);
  }

  rednerImg() {
    switch (this.props.img) {
      case 'visa':
        return <img src={visa} alt="Способ оплаты" aria-hidden="true" />;
      case 'paypal':
        return <img src={paypal} alt="Способ оплаты" aria-hidden="true" />;
      case 'bill':
        return <img src={bill} alt="Способ оплаты" aria-hidden="true" />;
      default:
        return null;
    }
  }

  renderInfo() {
    if (this.props.info === '') {
      return null;
    } else {
      return (
        <div className="pay-way__info">{this.props.info}</div>
      );
    }
  }

  select() {
    this.props.handler();
  }

  render() {
    return (
      <div className="pay-way">
        <div className="pay-way__card" onClick={this.select}>
          <div className="pay-way__title">{this.props.title}</div>
          <div className="pay-way__img">
            { this.rednerImg() }
          </div>
        </div>
        { this.renderInfo() }
      </div>
    );
  }

}

PayWay.defaultProps = {
  info: ''
};

PayWay.propTypes = {
  title: PropTypes.string.isRequired,
  img: PropTypes.string
};


export default PayWay;