import React, { Component } from 'react';
import { Button } from 'react-bootstrap';
import MusclesList from './MusclesList';
import axios from 'axios';
import Login from './Login';
import Footer from './Footer';
export default class Home extends Component {
  state = {
    userWorkouts: '',
  };

  componentDidMount() {
    const userID = JSON.parse(localStorage.getItem('currentUserID'));
    if (userID) {
      axios({
        method: 'get',
        url: 'http://localhost:5000/api/workouts',
        params: {
          userID,
        },
      }).then((res) => {
        console.log(res.data);
        this.setState({
          userWorkouts: res.data,
        });
      });
    }
  }

  render() {
    const {userWorkouts}=this.state
    const userID = JSON.parse(localStorage.getItem('currentUserID'));

    return (
      <div>
        <div className='row justify-content-center '>
          <img
            id='main-img'
            src={require('./../images/2l.jpg')}
            className='img-fluid'
            style={{ width: '100vw', height:'30vh', marginTop: '0.1%', marginBottom: '2%' }}
          />
        </div>
        {!userID?<Login/>:''}
        {userWorkouts!==''? <MusclesList workouts={userWorkouts} />:''}
     
     <Footer/>
      </div>
    );
  }
}