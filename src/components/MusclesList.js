import React, { Component } from 'react';
import { Button } from 'react-bootstrap';
import NewWorkoutForm from './NewWorkoutForm';
import MuscleInfo from './MuscleInfo';
let listOfMuscles = [
  { id: 1, name: 'Muscle 1', url: 'img001.jpg' },
  { id: 2, name: 'Muscle 2', url: 'img002.jpg' },
  { id: 3, name: 'Muscle 3', url: 'img003.jpg' },
  { id: 4, name: 'Muscle 4', url: 'img003.jpg' },
  { id: 5, name: 'Muscle 5', url: 'img003.jpg' },
  { id: 6, name: 'Muscle 6', url: 'img003.jpg' },
];
export default class MusclesList extends Component {
  state = {
    displayForm: false,
    userWorkouts: '',
  };

  componentDidMount() {
    this.setState({
      userWorkouts: this.props.workouts,
    });
  }

  toggleFormDisplay = () => {
    this.setState({
      displayForm: !this.state.displayForm,
    });
  };

  render() {
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

    const { userWorkouts } = this.state;
    if (userWorkouts !== '') {
      const muscles = listOfMuscles.map((muscle) => {
        const filteredWorkout = userWorkouts.filter((w) => {
          return w.muscleID === muscle.id;
        });
        console.log(filteredWorkout);
        return (
          <MuscleInfo
            key={muscle.id}
            muscleDetails={muscle}
            muscleImg={muscle.url}
            workoutExists={filteredWorkout.length!==0?true:false}
            registeredWorkout={filteredWorkout}
          />
        );
      });

      console.log(muscles);
      return (
        <div className='flex-container'>
                  <br/>
          <h5 id='date'>{dayName} {today}</h5>
          <br/>
        <hr />
          <div className='row justify-content-start'>{muscles}</div>
        </div>
      );
    } else {
      return <h1>An error occured</h1>;
    }
  }
}