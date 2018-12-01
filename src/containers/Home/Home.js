import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import './Home.css';
import logo from '../../images/react-logo.svg';

const Home = ({ user }) => {
  return (
    <div className="home">
      <img src={logo} alt="logo" />
      <h1>Hello, {user.name}!</h1>
    </div>
  );
}

const mapStateToProps = store => {
  return {
    user: store.user
  };
}

export default withRouter(connect(mapStateToProps)(Home));