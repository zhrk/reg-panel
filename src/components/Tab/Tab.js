import React from 'react';
import './Tab.css';
import PropTypes from 'prop-types';

const Tab = ({ id, title, handler }) => {

  const select =() => {
    handler(id);
  }

  return (
    <div className="tab">
      <input className="tab__input" id={'tab__' + id} type="radio" name="subdomain" />
      <label
        className="tab__label"
        htmlFor={'tab__' + id}
        onClick={select}
      >
        {title}
      </label>
    </div>
  );

}

Tab.propTypes = {
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  handler: PropTypes.func.isRequired
};

export default Tab;