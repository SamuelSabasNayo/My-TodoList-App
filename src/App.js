import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Header from './components/layout/Headers';
import Home from '../src/components/auth/Home';
import Login from '../src/components/auth/Login';
import Signup from '../src/components/auth/Signup';

import './App.css';

const App = () => {
  return (
    <Router>
      <div className="App">
        <Header />
        <Route exact path='/' component={Home} />
        <Route exact path='/signup' component={Signup} />
        <Route exact path='/login' component={Login} />
      </div>
    </Router>
  );
}

export default App;