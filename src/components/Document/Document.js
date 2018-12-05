import React from 'react';
import './Document.css';
import PropTypes from 'prop-types';
import download from '../../images/Document/download.svg';
import green from '../../images/Document/green.svg';
import orange from '../../images/Document/orange.svg';

const Document = ({ title, docType, link, background }) => {

  const renderBgColor = () => {
    switch (background) {
      case 'green':
        return <img src={green} alt="Волны" aria-hidden="true" />;
      case 'orange':
        return <img src={orange} alt="Волны" aria-hidden="true" />;
      default:
        return null;
    }
  }

  return (
    <div className="document">
      <div className="document__body">
        <div className="document__body-bg">
          { renderBgColor() }
        </div>
        <div className="document__body-type">{docType}</div>
        <div className="document__body-title">{title}</div>
      </div>
      <a href={link} className="document__download" target="_blank" rel="noopener noreferrer">
        <img src={download} alt="Скачать" aria-hidden="true" />
        Скачать
      </a>
    </div>
  );

}

Document.propTypes = {
  title: PropTypes.string.isRequired,
  docType: PropTypes.string.isRequired,
  link: PropTypes.string.isRequired,
  background: PropTypes.string
};

export default Document;