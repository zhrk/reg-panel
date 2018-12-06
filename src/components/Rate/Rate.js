import React from 'react';
import './Rate.css';
import PropTypes from 'prop-types';

const Rate = ({ id, title, borderColor, price, features, pricing }) => {

  const featuresList = features.map(function(item, index) {
    return (
      <li
        className="rate__features-item"
        key={'rate__features-id-' + index}
      >
        {item}
      </li>
    );
  });

  const pricingList = pricing.map(function(item, index) {
    return (
      <li
        className="rate__pricing-item"
        key={'rate__pricing-id-' + index}
      >
        <div className="rate__pricing-item-title">{item.title}</div>
        <div className="rate__pricing-item-value"><span>{item.value}$</span> / month per account</div>
      </li>
    );
  });

  return (
    <div className="rate">
      <input className="rate__input" type="radio" id={'rate__' + id} name="rate" />
      <label
        className="rate__label"
        htmlFor={'rate__' + id}
        style={{'borderTopColor': borderColor}}
      >
        <div className="rate__title">{title}</div>
        <div className="rate__price">
          <div className="rate__price-currency">$</div>
          <div className="rate__price-value">{price}</div>
        </div>
        <ul className="rate__features">
          { featuresList }
        </ul>
        <ul className="rate__pricing">
          { pricingList }
        </ul>
      </label>
    </div>
  );

}

Rate.propTypes = {
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  features: PropTypes.array.isRequired,
  pricing: PropTypes.array.isRequired
};

export default Rate;