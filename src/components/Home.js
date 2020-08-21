import React, { Component } from 'react';
import {Button} from 'react-bootstrap'

export default class Home extends Component {
  render() {
    return (
      <div>
        <div className='row justify-content-center '>
          <img
            id='main-img'
            src={require('./../images/main.jpg')}
            className='img-fluid'
            style={{ width: '100vw', marginTop: '0.4%', marginBottom: '2%' }}
          />
        </div>

        <div className='flex-container'>
          <div className='row justify-content-start'>
            <div className='col-sm-4'>
              <h3>Exercise_Name</h3>
              <img
                src={require('./../images/img001.jpg')}
                className='img-fluid'
                style={{ width: '50%' }}
              />
              <br />
              <Button variant='info'>Done</Button>{' '}
            </div>

            <div className='col-sm-4'>
              <h3>Exercise_Name</h3>
              <img
                src={require('./../images/img002.jpg')}
                className='img-fluid'
                style={{ width: '50%' }}
              />
            </div>

            <div className='col-sm-4'>
              <h3>Exercise_Name</h3>
              <img
                src={require('./../images/img003.jpg')}
                className='img-fluid'
                style={{ width: '50%' }}
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
}
