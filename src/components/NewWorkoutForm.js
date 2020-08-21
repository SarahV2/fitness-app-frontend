import React, { Component } from 'react';
import { Form, Button, Alert } from 'react-bootstrap';
import axios from 'axios';
import { Redirect,Link } from 'react-router-dom';

export default class NewWorkoutForm extends Component {
  state = {
    exerciseName: '',
    sets: '',
    reps:'',
    notes:'',
    showAlerts: false,
    errorMessages: [],
    redirect: false,
  };

  handleClick = (e) => {
    e.preventDefault();
    const { exerciseName, sets,reps,notes } = this.state;
    const {muscleID}=this.props
    const userID=JSON.parse(localStorage.getItem('currentUserID'))
    
    const workout = {
        exerciseName, sets,reps,notes,userID,muscleID
    };
    console.log(workout);

    axios
      .post('http://localhost:5000/api/workouts', workout)
      .then((res) => {
        console.log(res);
        // localStorage.setItem('currentUserID', JSON.stringify(res.data.id));
        // localStorage.setItem('currentName', JSON.stringify(res.data.name));
        // console.log(localStorage.getItem('currentUserID'));
        // console.log(res.data.name);
        this.setState({
          redirect: false,
        });
      })
      .catch((error) => {
        this.toggleAlert();
        console.log(error.response);
        const errors = error.response.data.errors;
        let errorsList = [];
        errors.map((error) => {
          errorsList.push(error.message);
          console.log(error.message);
        });

        this.setState({
          errorMessages: errorsList,
        });
      });
  };

  handleChange = (e) => {
    console.log(e.target.value);
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  toggleAlert = () => {
    this.setState({
      showAlerts: true,
    });
  };
  render() {
    // const loggedIn = localStorage.getItem('currentName');

    // if (this.state.redirect || loggedIn) {
    //   window.location.href = '/';
    // }
    console.log(this.props.muscleID)
    const { showAlerts, errorMessages } = this.state;
    let alerts;
    if (errorMessages) {
      alerts = errorMessages.map((error, index) => (
        <Alert key={index} variant='danger'>
          {error}
        </Alert>
      ));
    }

    return (
      <div className='col'>
        <div className='workout-form col-sm-12 col-md-12 col-xs-6 signup-form'>
          <Form>
            {showAlerts ? <div id='alerts-container'>{alerts}</div> : ''}

            <Form.Group>
              <Form.Label>Exercise Name</Form.Label>
              <Form.Control
                type='text'
                name='exerciseName'
                placeholder='Exercise Name'
                onChange={(e) => this.handleChange(e)}
              />
            </Form.Group>


            <Form.Group>
              <Form.Label>Sets</Form.Label>
              <Form.Control
                type='number'
                name='sets'
                placeholder='Number of sets'
                onChange={(e) => this.handleChange(e)}
              />
            </Form.Group>

            <Form.Group>
              <Form.Label>Reps</Form.Label>
              <Form.Control
                type='number'
                name='reps'
                placeholder='Number of reps'
                onChange={(e) => this.handleChange(e)}
              />
            </Form.Group>


            <Form.Group>
              <Form.Label>Notes</Form.Label>
              <Form.Control
                type='text'
                name='notes'
                placeholder='Additional Information'
                onChange={(e) => this.handleChange(e)}
              />
            </Form.Group>



            <div id='submit-button'>
              <Button
                onClick={(e) => this.handleClick(e)}
                variant='primary'
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
