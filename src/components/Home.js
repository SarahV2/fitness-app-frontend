import React, { Component } from 'react';
import { Button } from 'react-bootstrap';
import MusclesList from './MusclesList';
import axios from 'axios';
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
    return (
      <div>
        <div className='row justify-content-center '>
          <img
            id='main-img'
            src={require('./../images/main.jpg')}
            className='img-fluid'
            style={{ width: '100vw', marginTop: '0.4%', marginBottom: '2%' }}
          />
        </div>
        {userWorkouts!==''? <MusclesList workouts={userWorkouts} />:''}
       
      </div>
    );
  }
}
