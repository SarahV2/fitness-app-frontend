import React, { Component } from 'react';
import { Form, Button, Alert } from 'react-bootstrap';
import axios from 'axios';
import { Link } from 'react-router-dom';

export default class Login extends Component {
  state = {
    email: '',
    password: '',
    showAlerts: false,
    errorMessages: [],
    redirect: false,
  };

  handleClick = (e) => {
    e.preventDefault();
    const { email, password } = this.state;
    const user = {
      email,
      password,
    };
    console.log(user);

    axios
      .post('http://localhost:5000/api/users/login', user)
      .then((res) => {
        console.log(res.data.id);
        localStorage.setItem('currentUserID', JSON.stringify(res.data.id));
        localStorage.setItem('currentName', JSON.stringify(res.data.name));
        console.log(localStorage.getItem('currentUserID'));
        console.log(res.data.name);
        this.setState({
          redirect: true,
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
    const loggedIn = localStorage.getItem('currentName');

    if (this.state.redirect || loggedIn) {
      window.location.href = '/home';
    }

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
        <br/><br/>
        <h3>Login to Continue</h3>
        <div className='col-md-5 col-xs-4 col-sm-4 col-lg-3 login-form'>
          <Form>
            {showAlerts ? <div id='alerts-container'>{alerts}</div> : ''}

            <Form.Group controlId='formBasicEmail'>
              <Form.Label>Email address</Form.Label>
              <Form.Control
                type='email'
                name='email'
                placeholder='Email'
                onChange={(e) => this.handleChange(e)}
              />
            </Form.Group>

            <Form.Group controlId='formBasicPassword'>
              <Form.Label>Password</Form.Label>
              <Form.Control
                type='password'
                name='password'
                placeholder='Password'
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
            <br/>
            <Form.Text className="text-center">Doesn't have an account? <Link to='/signup'>Sign Up</Link></Form.Text>
          </Form>
        </div>
     
      </div>
    );
  }
}
