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

function App() {
  return (
    <BrowserRouter>
    <div className="App">
      <Switch>
        <Route exact path='/' component={Home} />
        <Route path='/register' component={Register} />
        <Route path='/instructions' component={Instructions} />
        <Route path='/contact-us' component={Contact} />
        <Route exact path='/forget-password' component={ForgetPassword} />
        <Route path='/dashboard' component={Dashboard} />
        <Route path='/payment-status' component={Payment} />
      </Switch>
      <Footer />
    </div>
    </BrowserRouter>
  );
}

export default App;
