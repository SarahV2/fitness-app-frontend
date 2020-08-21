import React from 'react';

import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import NavigationBar from './components/NavigationBar';
import SignUp from './components/SignUp';
import Login from './components/Login';
import TestA from './components/TestA';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import Home from './components/Home';
import NewWorkoutForm from './components/NewWorkoutForm';

function App() {
  return (
    <Router>
      <div className='App'>
        <NavigationBar />

        <Route exact path='/' component={Home} />
        <Route exact path='/login' component={Login} />
        <Route path='/signup' component={SignUp} />

        <NewWorkoutForm muscleID={5} />
        <TestA />
      </div>
    </Router>
  );
}

export default App;
