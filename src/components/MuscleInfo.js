import React, { Component } from 'react';
import { Button } from 'react-bootstrap';
import NewWorkoutForm from './NewWorkoutForm';
import WorkoutDetails from './WorkoutDetails';

export default class MuscleInfo extends Component {
  state = {
    displayForm: false,
    viewDetails: false,
    currentMuscle: {},
    muscleImg: '',
    workoutStatus: false,
    workoutDetails: '',
    visibleButton: true,
  };

  componentDidMount() {
    console.log(this.props)

    if (this.props.workoutExists == true) {
      this.setState({ visibleButton: false,
    });
    }

    this.setState({
      currentMuscle: this.props.muscleDetails,
      muscleImg: this.props.muscleImg,
      workoutStatus: this.props.workoutExists,
      workoutDetails: this.props.registeredWorkout,
    });

    console.log(this.state);
  }

  toggleFormDisplay = () => {
    this.setState({
      displayForm: !this.state.displayForm,
    });
  };

  toggleViewDetails = () => {
    this.setState({
      viewDetails: !this.state.viewDetails,
    });
  };

  render() {
    const { currentMuscle, muscleImg, visibleButton,workoutDetails } = this.state;
    if (currentMuscle && muscleImg !== ''&&workoutDetails!=='') {
        console.log(workoutDetails)
      return (
        <div className=' muscleInfo col-sm-4 col-xs-12'>
          <h3>{currentMuscle.name}</h3>
          <img
            src={require(`./../images/${muscleImg}`)}
            className='img-fluid'
            style={{ width: '50%', height: '50%' }}
          />
          <br />
          {visibleButton ? (
            <Button onClick={() => this.toggleFormDisplay()} variant='info'>
              Add
            </Button>
          ) : (
            <Button onClick={() => this.toggleViewDetails()} variant='info'>
              View Details
            </Button>
          )}
 <br />
          {this.state.displayForm ? (
            <NewWorkoutForm muscleID={currentMuscle.id} />
          ) : (
            ''
          )}

          {this.state.viewDetails ? (
            <WorkoutDetails workout={workoutDetails} />
          ) : (
            ''
          )}
        </div>
      );
    } else {
      return <h1>An Error Occured</h1>;
    }
  }
}
