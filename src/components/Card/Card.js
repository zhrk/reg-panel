import React, { Component } from 'react';
import './Card.css';
import PropTypes from 'prop-types';
import info from '../../images/Card/info.svg';
import yandex from '../../images/Card/yandex.svg';
import robokassa from '../../images/Card/robokassa.svg';

class Card extends Component {

  renderImg() {
    switch (this.props.img) {
      case 'yandex': return yandex;
      case 'robokassa': return robokassa;
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