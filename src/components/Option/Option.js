import React from 'react';
import './Option.css';
import PropTypes from 'prop-types';

const Option = ({ value, title }) => {

  return (
    <option value={value} className="option">
      {title}
    </option>
  );

}

Option.propTypes = {
  value: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired
};

export default Option;