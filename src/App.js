import React from 'react';
import './App.css';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import Home from './components/pages/home';
import Register from './components/pages/students/register'
import Footer from './components/footer/footer'
import Instructions from './components/pages/students/instructions';

function App() {
  return (
    <BrowserRouter>
    <div className="App">
      <Switch>
        <Route exact path='/' component={Home} />
        <Route path='/register' component={Register} />
        <Route path='/instructions' component={Instructions} />
      </Switch>
      <Footer />
    </div>
    </BrowserRouter>
  );
}

export default App;
