import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import './Home.css';
import Logo from '../../components/Logo/Logo';
import Progress from '../../components/Progress/Progress';
import StepOne from '../../components/StepOne/StepOne';

const Home = props => {

  const renderStep = () => {
    switch (props.progress.currentStep) {
      case 1:
        return <StepOne />
      default:
        break;
    }
  }

  return (
    <div className="home">
      <Logo />
      <Progress
        currentStep={props.progress.currentStep}
        totalSteps={props.progress.totalSteps}
      />
      <div className="home__steps">
        { renderStep() }
      </div>
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