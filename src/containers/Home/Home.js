import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import './Home.css';
import Logo from '../../components/Logo/Logo';
import Progress from '../../components/Progress/Progress';

const Home = props => {
  return (
    <div className="home">
      <Logo />
      <Progress
        currentStep={props.progress.currentStep}
        totalSteps={props.progress.totalSteps}
      />
    </div>
  );
}

const mapStateToProps = store => {
  return {
    user: store.user,
    progress: store.progress
  };
}

export default withRouter(connect(mapStateToProps)(Home));