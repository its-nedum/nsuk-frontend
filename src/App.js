import React from 'react';
import './App.css';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import Home from './components/pages/home';
import Footer from './components/footer/footer'

function App() {
  return (
    <BrowserRouter>
    <div className="App">
      <Switch>
        <Route exact path='/' component={Home} />
      </Switch>
      <Footer />
    </div>
    </BrowserRouter>
  );
}

export default App;
