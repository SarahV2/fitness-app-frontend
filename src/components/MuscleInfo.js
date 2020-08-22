import React, { Component } from 'react';
import { Button } from 'react-bootstrap';
import NewWorkoutForm from './NewWorkoutForm';
import WorkoutDetails from './WorkoutDetails';
import Modal from 'react-awesome-modal';

export default class MuscleInfo extends Component {
  state = {
    displayForm: false,
    viewDetails: false,
    currentMuscle: {},
    muscleImg: '',
    workoutStatus: false,
    workoutDetails: '',
    visibleButton: true,
    visible: false,
  };

  componentDidMount() {
    console.log(this.props);

    if (this.props.workoutExists == true) {
      this.setState({ visibleButton: false });
    }

    this.setState({
      currentMuscle: this.props.muscleDetails,
      muscleImg: this.props.muscleImg,
      workoutStatus: this.props.workoutExists,
      workoutDetails: this.props.registeredWorkout,
    });

    console.log(this.state);
  }

  openModal() {
    this.setState({
      visible: true,
    });
  }

  closeModal() {
    this.setState({
      visible: false,
    });
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
    const {
      currentMuscle,
      muscleImg,
      visibleButton,
      workoutDetails,
    } = this.state;
    if (currentMuscle && muscleImg !== '' && workoutDetails !== '') {
      console.log(workoutDetails);
      return (
        <div className=' muscleInfo col-sm-4 col-xs-12'>
          <h3>{currentMuscle.name}</h3>
          <img
            src={require(`./../images/${muscleImg}`)}
            className='img-fluid'
            style={{ width: '60%', height: '60%' }}
          />
          <br />
          {visibleButton ? (
            <Button
              value='Open'
              onClick={() => this.openModal()}
              variant='info'
            >
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

          <Modal
            visible={this.state.visible}
            width='350'
            height='420'
            effect='fadeInDown'
            onClickAway={() => this.closeModal()}
          >
            <div id='form-modal'>
              <h6 id='form-title'>Record an excercise to {currentMuscle.name}</h6>
              <NewWorkoutForm muscleID={currentMuscle.id} />
              <a id='close-button' href='javascript:void(0);' onClick={() => this.closeModal()}>
                Close
              </a>
            </div>
          </Modal>
        </div>
      );
    } else {
      return <h1>An Error Occured</h1>;
    }
  }
}
