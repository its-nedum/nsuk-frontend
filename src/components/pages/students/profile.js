import React from 'react'
import {Link} from 'react-router-dom'
import Navbar from '../../header/signedInStudent'
import SideNavbar from '../../header/studentSideNav'
import Jamb from '../students/jambInfo'
import Personal from '../students/personalInfo'
import Olevel from '../students/olevelInfo'
import Alevel from '../students/alevelInfo'
import Success from '../students/successInfo'
import { makeStyles } from '@material-ui/core/styles';
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Style from '../../styles/Styles.module.css'
import '../../styles/profile.css'
import '../../styles/dashboard.css'

const useStyles = makeStyles((theme) => ({
    root: {
      width: '100%',
      marginTop: '15px',
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
    return ['Personal Information', 'JAMB Information', 'O\'level Information', 'A\'level Information (Direct Entry)', 'Completion'];
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
            <Alevel />
        )
      default:
        return (
            <Success />
        )
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

  // const handleReset = () => {
  //   setActiveStep(0);
  // };

  return (
      <div>
      <Navbar />
      
      <div className={Style.dashboard_banner}>
      <div className="row">
            <div className={`col-sm-12 col-md-3 ${Style.dash_menu}`} >
                <SideNavbar />
            </div>
            <div className="col-sm-12 col-md-9">   
    <div className={` ${classes.root}`}>
      <Stepper className="step_header" activeStep={activeStep} alternativeLabel>
        {steps.map((label) => (
          <Step key={label}>
            <StepLabel>{label}</StepLabel>
          </Step>
        ))}
      </Stepper>
      <div>
        {activeStep === steps.length ? (
          <div>
            <Typography className={classes.instructions}>Application Submitted Successfully!</Typography>
            {/* <Button onClick={handleReset}>Reset</Button> */}
            <Link to='/putme/student-application' className="btn btn-primary print_btn">Print Acknowledgement Slip</Link>
          </div>
        ) : (
          <div>
            <Typography className={classes.instructions}>{getStepContent(activeStep)}</Typography>
            <div className="my_btn">
              <Button
                color="primary"
                disabled={activeStep === 0}
                onClick={handleBack}
                className={classes.backButton}
              >
                Go Back
              </Button>
              <Button variant="contained" color="primary" onClick={handleNext} >
                {activeStep === steps.length - 1 ? 'Submit Application' : 'Save & Continue'}
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
