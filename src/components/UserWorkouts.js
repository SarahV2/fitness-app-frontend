import React, { Component } from 'react';
import axios from 'axios';
import WorkoutInfo from './WorkoutInfo';
import Footer from './Footer';
import { Redirect } from 'react-router-dom';
import NoWorkoutFound from './NoWorkoutFound';
import { sortByDate } from './../utils/helpers';

export default class UserWorkouts extends Component {
  state = {
    userWorkouts: '',
    sortedWorkouts: [],
  };

  componentDidMount() {
    const userID = JSON.parse(localStorage.getItem('currentUserID'));
    if (userID) {
      axios({
        method: 'get',
        url: 'http://localhost:5000/api/workouts/all',
        params: {
          userID,
        },
      }).then((res) => {
        console.log(res.data);
        this.setState({
          userWorkouts: res.data,
        });

        let result = sortByDate({ items: res.data }).getTimes();

        this.setState({
          sortedWorkouts: result,
        });
        console.dir(this.state.sortedWorkouts);
      });
    }
  }

  render() {
    const { userWorkouts, sortedWorkouts } = this.state;
    const loggedIn = JSON.parse(localStorage.getItem('currentUserID'));

    const arrayOfObj = Object.entries(sortedWorkouts).map((e) => ({
      [e[0]]: e[1],
    }));

    var rev = arrayOfObj.reverse();

    const finalized = arrayOfObj.map((obj) => (
      <div className=' col-sm-12 col-md-12 col-xs-12 col-lg-6 '>
        {Object.values(obj).map((o) => (
          <WorkoutInfo date={Object.keys(obj)} list={o} />
        ))}
      </div>
    ));

    console.log(finalized);
    const vals = Object.values(sortedWorkouts);
    for (const value of vals) {
      console.log(value);
    }

    // console.log(toshow)

    // if (this.state.datesArray) {
    //   console.log(this.state.datesArray);
    // }
    if (!loggedIn) {
      return <Redirect to='/' />;
    }
    if (userWorkouts.length > 0) {
      return (
        <div className='user-history'>
          <br />
          <h5> Workout History</h5>
          <div className='d-flex justify-content-center align-items-center'>
            {/* <div className='user-history flex-container'> */}
            <div className=' col-sm-12 col-md-12 col-xs-12 col-lg-6 '>
              {/* {toshow} */}

              {finalized}
            </div>
            <Footer />

            {/* </div> */}
          </div>
        </div>
      );
    } else {
      return <NoWorkoutFound />;
    }
  }
}
