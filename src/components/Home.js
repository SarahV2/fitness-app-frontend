import React, { Component } from 'react';
import MusclesList from './MusclesList';
import axios from 'axios';

import { Redirect } from 'react-router-dom';
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
    const { userWorkouts } = this.state;
    const userID = JSON.parse(localStorage.getItem('currentUserID'));
    var today = new Date();
    var dd = today.getDate();

    var mm = today.getMonth() + 1;
    var yyyy = today.getFullYear();
    if (dd < 10) {
      dd = '0' + dd;
    }

    if (mm < 10) {
      mm = '0' + mm;
    }

    today = dd + '/' + mm + '/' + yyyy;
    console.log(today);
    var days = [
      'Sunday',
      'Monday',
      'Tuesday',
      'Wednesday',
      'Thursday',
      'Friday',
      'Saturday',
    ];
    var dayName = days[new Date().getDay()];

    return (
      <div>
          
        <div class='image-home-banner'>
          <div class='container'>
            <div class='row'>
              <div class='col-md-12'>
                <h1 class='lg-text '>Track Your Progress</h1>
                <p class='image-aboutus-para'></p>
              </div>
            </div>
          </div>

        </div>

        {!userID ? <Redirect to='/'/> : ''}
        {userWorkouts !== '' ? <MusclesList workouts={userWorkouts} /> : ''}
      </div>
    );
  }
}
