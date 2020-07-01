import React from 'react';
import './App.css';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import Home from './components/pages/home';
import Register from './components/pages/students/register'
import Footer from './components/footer/footer'
import Instructions from './components/pages/students/instructions';
import Contact from './components/pages/students/contact';
import ForgetPassword from './components/pages/students/forgetPassword';
import Dashboard from './components/pages/students/dashboard';
import Payment from './components/pages/students/payment';
import Profile from './components/pages/students/profile';
import UtmeForm from './components/pages/students/utmeForm';
import PrintForm from './components/pages/students/printForm';
import NotFound from './components/pages/students/404'

// Admin Route Starts Here
import AdminDashboard from './components/pages/admins/adminDashboard';
import AddAdmin from './components/pages/admins/addAdmin';
import RegisteredCandidates from './components/pages/admins/registeredCandidates'
import Screening from './components/pages/admins/screening'
import SuccessfulCandidates from './components/pages/admins/successfulCandidates'
import SingleCandidate from './components/pages/admins/singleCandidate'
import Downloads from './components/pages/admins/downloads'
import Login from './components/pages/admins/login'

function App() {
  return (
    <BrowserRouter>
    <div className="App">
      <Switch>
        <Route exact path='/' component={Home} />
        <Route exact path='/putme/register' component={Register} />
        <Route path='/instructions' component={Instructions} />
        <Route path='/contact-us' component={Contact} />
        <Route path='/forget-password' component={ForgetPassword} />
        <Route exact path='/putme/dashboard' component={Dashboard} />
        <Route exact path='/putme/payment-status' component={Payment} />
        <Route exact path='/putme/student-profile' component={Profile} />
        <Route exact path='/putme/student-application' component={UtmeForm} />
        <Route exact path='/putme/print-acknowledgement' component={PrintForm} />
        
        {/* Admin Routes Start Here */}
        <Route exact path='/admin/login' component={Login} />
        <Route exact path='/admin/dashboard' component={AdminDashboard} />
        <Route exact path='/admin/add-admin' component={AddAdmin} />
        <Route exact path='/admin/registered-candidates' component={RegisteredCandidates} />
        <Route exact path='/admin/screening' component={Screening} />
        <Route exact path='/admin/successful-candidates' component={SuccessfulCandidates} />
        <Route exact path='/candidate/:regnum' component={SingleCandidate} />
        <Route exact path='/admin/downloads' component={Downloads} />
        <Route component={NotFound} />
      </Switch>
      <Footer />
    </div>
    </BrowserRouter>
  );
}

export default App;
