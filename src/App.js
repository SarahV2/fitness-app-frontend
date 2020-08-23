import React from 'react';

import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import NavigationBar from './components/NavigationBar';
import SignUp from './components/SignUp';
import Login from './components/Login';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './components/Home';
import Tips from './components/Tips';
import Footer from './components/Footer';
import UserWorkouts from './components/UserWorkouts';
import AboutUs from './components/AboutUs';
import NotFound from './components/NotFound';
import Landing from './components/Landing';

function App() {
  return (
    <div className='App'>
      <NavigationBar />
      <Router>
        <Switch>
          <Route exact path='/' component={Landing} />
          <Route path='/home' component={Home} />
          <Route path='/login' component={Login} />
          <Route path='/signup' component={SignUp} />
          <Route path='/tips' component={Tips} />
          <Route path='/myreport' component={UserWorkouts} />
          <Route path='/about' component={AboutUs} />
          <Route component={NotFound} />
        </Switch>
      </Router>
      <Footer />
    </div>
  );
}

export default App;
