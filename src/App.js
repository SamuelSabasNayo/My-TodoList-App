import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Header from './components/layout/Headers';
import Home from '../src/components/auth/Home';
import Login from '../src/components/auth/Login';
import Signup from '../src/components/auth/Signup';
import { AuthProvider } from './components/auth/Auth';
import PrivateRoute from './components/auth/PrivateRoute';

import './App.css';

const App = () => {
  return (
    <AuthProvider>
      <Router>
        <div className="App">
          <Header />
          <PrivateRoute exact path='/' component={Home} />
          <Route exact path='/signup' component={Signup} />
          <Route exact path='/login' component={Login} />
        </div>
      </Router>
    </AuthProvider>
  );
}

export default App;