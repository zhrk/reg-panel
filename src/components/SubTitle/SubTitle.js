import React from 'react';
import './SubTitle.css';
import PropTypes from 'prop-types';

const SubTitle = ({ text }) => {
  return (
    <div className="sub-title">{text}</div>
  );
}

SubTitle.propTypes = {
  text: PropTypes.string.isRequired
};

export default SubTitle;