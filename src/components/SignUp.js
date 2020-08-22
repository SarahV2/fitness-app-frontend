import React, { Component } from 'react';
import { Form, Button, Alert } from 'react-bootstrap';
import axios from 'axios';
import {Link} from 'react-router-dom'
import Footer from './Footer';

export default class SignUp extends Component {
  state = {
    name: '',
    email: '',
    password: '',
    showAlerts: false,
    errorMessages: [],
    redirect: false

  };

  handleClick = (e) => {
    e.preventDefault();
    const { name, email, password } = this.state;
    const newUser = {
      name,
      email,
      password,
    };
    console.log(newUser);

    axios
      .post('http://localhost:5000/api/users/', newUser)
      .then((res) => {
        console.log(res.data.id);
        localStorage.setItem('currentUserID',JSON.stringify(res.data.id))
        localStorage.setItem('currentName',JSON.stringify(res.data.name))
        console.log(localStorage.getItem('currentUserID'))
        console.log(res.data.name)
        this.setState({
          redirect:true
        })

      })
      .catch((error) => {
        this.toggleAlert();
        console.log(error.response);
        const errors = error.response.data.errors;
        let errorsList = [];
        errors.map((error) => {
          errorsList.push(error.msg);
          console.log(error.msg);
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

    if (this.state.redirect||loggedIn) {
      window.location.href = "/";
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
        <h3>Sign Up</h3>
        <div className='col-md-5 col-xs-4 col-sm-4 col-lg-3 signup-form'>
          <Form>
            {showAlerts ? <div id='alerts-container'>{alerts}</div> : ''}

            <Form.Group>
              <Form.Label>Name</Form.Label>
              <Form.Control
                type='name'
                name='name'
                placeholder='Name'
                onChange={(e) => this.handleChange(e)}
              />
            </Form.Group>

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
            <Form.Text className="text-center">Already have an account? <Link to='/login'>Log in</Link></Form.Text>

          </Form>
        </div>
        <Footer/>
      </div>
    );
  }
}
