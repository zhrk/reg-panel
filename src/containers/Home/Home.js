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
import StepFive from '../../components/StepFive/StepFive';
import StepSix from '../../components/StepSix/StepSix';
import { setCurrentStep } from '../../actions/progressActions';
import * as userActions from '../../actions/userActions';

const Home = props => {

  const renderStep = () => {
    switch (props.progress.currentStep) {
      case 1:
        return (
          <StepOne
            setCurrentStep={props.setCurrentStep}
            setName={props.setName}
            setEmail={props.setEmail}
          />
        );

      case 2:
        return (
          <StepTwo setCurrentStep={props.setCurrentStep} />
        );

      case 3:
        return (
          <StepThree
            setCurrentStep={props.setCurrentStep}
            setRate={props.setRate}
          />
        );

      case 4:
        return (
          <StepFour
            setCurrentStep={props.setCurrentStep}
            setPayWay={props.setPayWay}
          />
        );
      
      case 5:
        return (
          <StepFive
            setCurrentStep={props.setCurrentStep}
          />
        );

      case 6:
        return (
          <StepSix
            setCurrentStep={props.setCurrentStep}
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
    setName: name => dispatch(userActions.setName(name)),
    setEmail: email => dispatch(userActions.setEmail(email)),
    setRate: rate => dispatch(userActions.setRate(rate)),
    setPayWay: payWay => dispatch(userActions.setPayWay(payWay))
  };
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Home));