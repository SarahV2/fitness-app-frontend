import React from 'react';

import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import NavigationBar from './components/NavigationBar';
import SignUp from './components/SignUp';
import Login from './components/Login';
import { BrowserRouter as Router, Route, } from 'react-router-dom';
import Home from './components/Home';
import Tips from './components/Tips';

function App() {
  return (
    <Router>
      <div className='App'>
        <NavigationBar />

        <Route exact path='/' component={Home} />
        <Route exact path='/login' component={Login} />
        <Route path='/signup' component={SignUp} />
        <Route path='/tips' component={Tips} />
  
      </div>
    </Router>
  );
}

export default App;
