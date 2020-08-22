import React, { Component } from 'react';
import { Form, Button, Alert } from 'react-bootstrap';
import axios from 'axios';
import { Redirect, Link } from 'react-router-dom';

export default class EditWorkoutForm extends Component {
  state = {
    exerciseName: '',
    sets: '',
    reps: '',
    notes: '',
    workoutID:''
  };

  componentDidMount() {
    const currentWorkout = this.props.workout;
    this.setState({
      exerciseName: currentWorkout.exerciseName,
      sets: currentWorkout.sets,
      reps: currentWorkout.reps,
      notes: currentWorkout.notes,
      workoutID:currentWorkout._id
    });
  }

  handleClick = (e) => {
    e.preventDefault();
    const { exerciseName, sets, reps, notes,workoutID } = this.state;
    let userID = JSON.parse(localStorage.getItem('currentUserID'));

    //const { muscleID } = this.props;
    //const userID = JSON.parse(localStorage.getItem('currentUserID'));

    const workout = {
      exerciseName,
      sets,
      reps,
      notes,
      userID
    };
    console.log(workout);

    axios
      .patch(`http://localhost:5000/api/workouts/${workoutID}`, workout)
      .then((res) => {
        console.log(res);
        window.location.href = '/home';
      })
      .catch((error) => {
        console.log(error);
      });
  };

  handleChange = (e) => {
    console.log(e.target.value);
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  render() {

    return (
      <div className='col'>
        <div className='workout-form col-sm-12 col-md-12 col-xs-6 edit-workout-form'>
          <Form>
            <Form.Group>
              <Form.Label>Exercise Name</Form.Label>
              <Form.Control
                type='text'
                name='exerciseName'
                value={this.state.exerciseName}
                required
             
                placeholder='Exercise Name'
                onChange={(e) => this.handleChange(e)}
              />
            </Form.Group>

            <Form.Group>
              <Form.Label>Sets</Form.Label>
              <Form.Control
                type='number'
                name='sets'
                value={this.state.sets}
                required
                min={1}
                placeholder='Number of sets'
                onChange={(e) => this.handleChange(e)}
              />
            </Form.Group>

            <Form.Group>
              <Form.Label>Reps</Form.Label>
              <Form.Control
                type='number'
                name='reps'
                value={this.state.reps}
                min={1}
                required
                placeholder='Number of reps'
                onChange={(e) => this.handleChange(e)}
              />
            </Form.Group>

            <Form.Group>
              <Form.Label>Notes</Form.Label>
              <Form.Control
                type='text'
                name='notes'
                value={this.state.notes}
                placeholder='Additional Information'
                onChange={(e) => this.handleChange(e)}
              />
            </Form.Group>

            <div id='submit-button'>
              <Button
                onClick={(e) => this.handleClick(e)}
                variant='light'
                type='submit'
              >
                Submit
              </Button>
            </div>
          </Form>
        </div>
      </div>
    );
  }
}
