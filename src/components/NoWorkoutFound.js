import React, { Component } from 'react';
import { Link } from 'react-router-dom';
export default class NoWorkoutFound extends Component {
  render() {
    return (
      <div className='no-workout-message'> 
        <h4>
          <i className='far fa-frown' />
          {''} No Workouts found
        </h4>
        <p>
          Start recording your progress <Link to='/home'>today</Link>
        </p>
      </div>
    );
  }
}
