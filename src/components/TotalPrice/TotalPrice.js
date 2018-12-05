import React from 'react';
import './TotalPrice.css';
import PropTypes from 'prop-types';

const TotalPrice = ({ value }) => {
  return (
    <div className="total-price">Итого: ${value}</div>
  );
}

TotalPrice.propTypes = {
  value: PropTypes.number.isRequired
};

export default TotalPrice;