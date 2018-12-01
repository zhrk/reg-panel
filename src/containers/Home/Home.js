import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import './Home.css';
import Logo from '../../components/Logo/Logo';

const Home = () => {
  return (
    <div className="home">
      <Logo />
    </div>
  );
}

const mapStateToProps = store => {
  return {
    user: store.user
  };
}

export default withRouter(connect(mapStateToProps)(Home));