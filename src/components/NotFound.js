import React, { Component } from 'react';

export default class NotFound extends Component {
  render() {
    return (
      <div className='page-not-found'>
        <h4>
          <i className='fas fa-exclamation-triangle' />
          {''} Something went wrong
        </h4>
        <p>The requested page does not exist</p>
      </div>
    );
  }
}
