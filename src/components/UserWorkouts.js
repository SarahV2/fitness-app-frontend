import React, { Component } from 'react';
import axios from 'axios';
import WorkoutInfo from './WorkoutInfo';
import Footer from './Footer';
import { Redirect } from 'react-router-dom';
import { Container } from 'reactstrap';
export default class UserWorkouts extends Component {
  state = {
    userWorkouts: '',
    datesArray: [],
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
        //this.calculate();
      });
    }
  }

  // calculate = () => {
  //   for (var i = 0; i < this.state.datesArray.length; i++) {
  //     console.log(new Date(this.state.datesArray.createdAt));
  //   }
  //   let array = this.state.userWorkouts.sort(function (a, b) {
  //     var dateA = new Date(a.createdAt),
  //       dateB = new Date(b.createdAt);
  //     return dateA - dateB;
  //   });
  //   let foo = new Date(array[0].createdAt);
  //   console.log(foo);

  //   this.setState({
  //     datesArray: array,
  //   });
  // };

  render() {
    const { userWorkouts } = this.state;
    const loggedIn = JSON.parse(localStorage.getItem('currentUserID'));

    // if (this.state.datesArray) {
    //   console.log(this.state.datesArray);
    // }
    if (!loggedIn) {
      return <Redirect to='/' />;
    }
    if (userWorkouts) {
      return (
        <div className='user-history'>
           <br />
          <h5> Workout History</h5>
        <div className='d-flex justify-content-center align-items-center'>
        {/* <div className='user-history flex-container'> */}
       
         
          {/* send each workout list based on the date, we will send an array of objects */}
          
          <div className=' col-sm-12 col-md-12 col-xs-12 col-lg-6 '>
          <WorkoutInfo list={userWorkouts} />
          </div>
        
          <Footer />
  
        {/* </div> */}
        </div>
        </div>
      );
    } else {
      return <p>An error occured</p>;
    }
  }
}
