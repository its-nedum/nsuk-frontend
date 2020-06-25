import React from 'react'
import Navbar from '../../header/signedInStudent'
import SideNavbar from '../../header/studentSideNav'
import Jamb from '../students/jambInfo'
import Personal from '../students/personalInfo'
import Olevel from '../students/olevelInfo'
import Success from '../students/successInfo'
import '../../styles/dashboard.css'
import '../../styles/profile.css'
import { makeStyles } from '@material-ui/core/styles';
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles((theme) => ({
    root: {
      width: '100%',
      marginTop: '30px',
      borderRadius: '5px',
    },
    backButton: {
      marginRight: theme.spacing(1),
    },
    instructions: {
      marginTop: theme.spacing(1),
      marginBottom: theme.spacing(1),
    },
  }));
  
  function getSteps() {
    return ['Personal Information', 'Jamb Details', 'Olevel Results', 'Submission'];
  }
  
  function getStepContent(stepIndex) {
    switch (stepIndex) {
      case 0:
        return (
            <Personal />
        )
      case 1:
        return (
            <Jamb />
        )
      case 2:
        return (
            <Olevel />
        )
      case 3:
        return (
            <Success />
        )
      default:
        return 'Unknown stepIndex';
    }
  }

const Profile = () => {
    const classes = useStyles();
  const [activeStep, setActiveStep] = React.useState(0);
  const steps = getSteps();

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleReset = () => {
    setActiveStep(0);
  };

  return (
      <div>
      <Navbar />
      
      <div className="dashboard_banner">
      <div className="row">
            <div className="col-sm-12 col-md-3 dash_menu">
                <SideNavbar />
            </div>
            <div className="col-sm-12 col-md-9">   
    <div className={`step_header ${classes.root}`}>
      <Stepper activeStep={activeStep} alternativeLabel>
        {steps.map((label) => (
          <Step key={label}>
            <StepLabel>{label}</StepLabel>
          </Step>
        ))}
      </Stepper>
      <div>
        {activeStep === steps.length ? (
          <div>
            <Typography className={classes.instructions}>All steps completed</Typography>
            <Button onClick={handleReset}>Reset</Button>
          </div>
        ) : (
          <div>
            <Typography className={classes.instructions}>{getStepContent(activeStep)}</Typography>
            <div>
              <Button
                color="primary"
                disabled={activeStep === 0}
                onClick={handleBack}
                className={classes.backButton}
              >
                Go Back
              </Button>
              <Button variant="contained" color="primary" onClick={handleNext}>
                {activeStep === steps.length - 1 ? 'Finish' : 'Save & Continue'}
              </Button>
            </div>
          </div>
        )}
      </div>
    </div>

    </div>
    </div>
    </div>
    </div>
  );
}

export default Profile
