import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import './Home.css';
import Logo from '../../components/Logo/Logo';
import Progress from '../../components/Progress/Progress';
import StepOne from '../../components/StepOne/StepOne';
import StepTwo from '../../components/StepTwo/StepTwo';
import { setCurrentStep } from '../../actions/progressActions';

const Home = props => {

  const renderStep = () => {
    const { setCurrentStep } = props;

    switch (props.progress.currentStep) {
      case 1:
        return <StepOne setCurrentStep={setCurrentStep} />
      case 2:
        return <StepTwo setCurrentStep={setCurrentStep} />
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

const mapDispatchToProps = dispatch => {
  return {
    setCurrentStep: step => dispatch(setCurrentStep(step))
  };
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Home));