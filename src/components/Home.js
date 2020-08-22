import React, { Component } from 'react';
import { Button } from 'react-bootstrap';
import MusclesList from './MusclesList';
import axios from 'axios';
import Login from './Login';
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
    var days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    var dayName = days[new Date().getDay()];

    return (
      <div>
        <div className='row justify-content-center '>
          <img
            id='main-img'
            src={require('./../images/2l.jpg')}
            className='img-fluid'
            style={{
              width: '100vw',
              height: '30vh',
              marginTop: '0.8%',
              marginBottom: '2%',
            }}
          />
        </div>

        {!userID ? <Login /> : ''}
        {userWorkouts !== '' ? <MusclesList workouts={userWorkouts} /> : ''}

        <footer class='footer'>
          <div class=' container footer-m'>
            <div class='col-md-12 col-sm-12 col-xs-12 '>
              <p class='copyright-text'>
                Copyright &copy; 2020 All Rights Reserved
              </p>
            </div>
          </div>
        </footer>
      </div>
    );
  }
}
