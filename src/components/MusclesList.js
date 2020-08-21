import React, { Component } from 'react';
import { Button } from 'react-bootstrap';
import NewWorkoutForm from './NewWorkoutForm';
import MuscleInfo from './MuscleInfo';
let listOfMuscles = [
  { id: 1, name: 'Muscle 1', url: 'img001.jpg' },
  { id: 2, name: 'Muscle 2', url: 'img002.jpg' },
  { id: 3, name: 'Muscle 3', url: 'img003.jpg' },
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
          <div className='row justify-content-start'>{muscles}</div>
        </div>
      );
    } else {
      return <h1>An error occured</h1>;
    }
  }
}