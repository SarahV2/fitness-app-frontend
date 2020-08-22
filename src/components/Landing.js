import React, { Component } from 'react';
import { Link, Redirect } from 'react-router-dom';
import { Button } from 'react-bootstrap';
import './../Landing.css';
export default class Landing extends Component {
  render() {
    const userID = JSON.parse(localStorage.getItem('currentUserID'));

    return (
      <div>
        {userID ? (
          <Redirect to='/home' />
        ) : (
          <section className='landing'>
            <div className='dark-overlay'>
              <div className='landing-inner'>
                <h1 className='x-large'>Fitness Tracker</h1>
                <p className='lead'>Keep Track of your fitness journey</p>
                <div className='buttons'>
                  <Link to='/login'>
                    <Button variant='light'>Login</Button>
                  </Link>{' '}
                  <Link to='/signup'>
                    <Button className='colored-button' variant='warning'>Sign Up</Button>
                  </Link>
                </div>
              </div>
            </div>
          </section>
        )}
      </div>
    );
  }
}
