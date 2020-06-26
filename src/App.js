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
      </Switch>
      <Footer />
    </div>
    </BrowserRouter>
  );
}

export default App;
