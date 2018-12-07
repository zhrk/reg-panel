import React, { Component } from 'react';
import './Card.css';
import PropTypes from 'prop-types';
import info from '../../images/Card/info.svg';
import yandex from '../../images/Card/yandex.png';
import robokassa from '../../images/Card/robokassa.png';
import paypal from '../../images/Card/paypal.png';
import stripe from '../../images/Card/stripe.png';
import walletone from '../../images/Card/walletone.png';
import freekassa from '../../images/Card/freekassa.png';
import amocrm from '../../images/Card/amocrm.png';
import zendesk from '../../images/Card/zendesk.png';
import jivosite from '../../images/Card/jivosite.png';
import sendpulse from '../../images/Card/sendpulse.png';
import design from '../../images/Card/design.png';
import webdev from '../../images/Card/webdev.png';
import copy from '../../images/Card/copy.png';
import translates from '../../images/Card/translates.png';

class Card extends Component {

  renderImg() {
    switch (this.props.img) {
      case 'yandex': return yandex;
      case 'robokassa': return robokassa;
      case 'paypal': return paypal;
      case 'stripe': return stripe;
      case 'walletone': return walletone;
      case 'freekassa': return freekassa;
      case 'amocrm': return amocrm;
      case 'zendesk': return zendesk;
      case 'jivosite': return jivosite;
      case 'sendpulse': return sendpulse;
      case 'design': return design;
      case 'webdev': return webdev;
      case 'copy': return copy;
      case 'translates': return translates;
      default: break;
    }
  }

  renderAddInfo() {
    if (this.props.addInfo !== null) {
      return <div className="card__add-info">$1000</div>;
    }
  }

  render() {
    return (
      <div className="card">
        <input className="card__input" id={'card__' + this.props.id} type="checkbox" />
        <label className="card__label" htmlFor={'card__' + this.props.id}>
          <div className="card__img">
            <img src={ this.renderImg() } alt="Изображение" aria-hidden="true" />
          </div>
          <div className="card__checkbox"></div>
          { this.renderAddInfo() }
        </label>
        <div className="card__bottom">
          <div className="card__title">{this.props.title}</div>
          <div className="card__info">
            <img src={info} alt="Информация" aria-hidden="true" />
            <div className="card__info-text">{this.props.info}</div>
          </div>
        </div>
      </div>
    );
  }

}

Card.defaultProps = {
  addInfo: null
};

Card.propTypes = {
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  img: PropTypes.string.isRequired,
  info: PropTypes.string.isRequired,
  addInfo: PropTypes.string
};

export default Card;