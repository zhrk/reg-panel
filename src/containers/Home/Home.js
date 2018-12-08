import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import './Home.css';
import Logo from '../../components/Logo/Logo';
import Progress from '../../components/Progress/Progress';
import StepOne from '../../components/StepOne/StepOne';
import StepTwo from '../../components/StepTwo/StepTwo';
import StepThree from '../../components/StepThree/StepThree';
import StepFour from '../../components/StepFour/StepFour';
import { setCurrentStep } from '../../actions/progressActions';
import { setName, setEmail, setRate, setPayWay } from '../../actions/userActions';

const Home = props => {

  const renderStep = () => {
    const { setCurrentStep, setName, setEmail, setRate, setPayWay } = props;

    switch (props.progress.currentStep) {
      case 1:
        return (
          <StepOne
            setCurrentStep={setCurrentStep}
            setName={setName}
            setEmail={setEmail}
          />
        );

      case 2:
        return <StepTwo setCurrentStep={setCurrentStep} />

      case 3:
        return (
          <StepThree
            setCurrentStep={setCurrentStep}
            setRate={setRate}
          />
        );

      case 4:
        return (
          <StepFour
            setCurrentStep={setCurrentStep}
            setPayWay={setPayWay}
          />
        );

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
    setCurrentStep: step => dispatch(setCurrentStep(step)),
    setName: name => dispatch(setName(name)),
    setEmail: email => dispatch(setEmail(email)),
    setRate: rate => dispatch(setRate(rate)),
    setPayWay: payWay => dispatch(setPayWay(payWay))
  };
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Home));