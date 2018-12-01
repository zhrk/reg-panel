import React from 'react';
import './Logo.css';
import logo from '../../images/Logo/logo.svg';

const Logo = () => {
  return (
    <div className="logo">
      <img src={logo} alt="Логотип" />
    </div>
  );
}

export default Logo;