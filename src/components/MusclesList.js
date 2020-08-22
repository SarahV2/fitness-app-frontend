import React, { Component } from 'react';
import MuscleInfo from './MuscleInfo';
let listOfMuscles = [
  { id: 1, name: 'Abdominis', url: 'img001.jpeg' },
  { id: 2, name: 'Hamstring', url: 'img002.jpeg' },
  { id: 3, name: 'Chest', url: 'img003.jpeg' },
  { id: 4, name: 'Hamstring', url: 'img004.jpeg' },
  { id: 5, name: 'Triceps', url: 'img005.jpeg' },
  { id: 6, name: 'Biceps', url: 'img006.jpeg' },
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