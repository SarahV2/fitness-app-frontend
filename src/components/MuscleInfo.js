import React, { Component } from 'react';
import { Button } from 'react-bootstrap';
import NewWorkoutForm from './NewWorkoutForm';

export default class MuscleInfo extends Component {
  state = {
    displayForm: false,
    currentMuscle: {},
    muscleImg: '',
    workoutStatus: false,
    workoutDetails: '',
    visibleButton:true
  };

  componentDidMount() {
      if(this.props.workoutExists==true){
          this.setState({visibleButton:false})
      }
      
    this.setState({
      currentMuscle: this.props.muscleDetails,
      muscleImg: this.props.muscleImg,
      workoutDetails: this.props.registeredWorkout,
      workoutStatus: this.props.workoutExists,
    });

    console.log(this.props.muscleDetails);
  }

  toggleFormDisplay = () => {
    this.setState({
      displayForm: !this.state.displayForm,
    });
  };

  render() {
    const { currentMuscle, muscleImg,visibleButton } = this.state;
    if (currentMuscle && muscleImg !== '') {
      return (
        <div className=' muscleInfo col-sm-4 col-xs-12'>
          <h3>{currentMuscle.name}</h3>
          <img
            src={require(`./../images/${muscleImg}`)}
            className='img-fluid'
            style={{ width: '50%', height: '50%' }}
          />
          <br />
          {visibleButton?  <Button onClick={() => this.toggleFormDisplay()} variant='info'>
            Add
          </Button>:''}
        
          {this.state.displayForm ? (
            <NewWorkoutForm muscleID={currentMuscle.id} />
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
