import React, { Component } from 'react';
import './../Footer.css';

export default class Footer extends Component {
  render() {
    return (
       <footer class='site-footer'>
            {/* // <footer class='footer'> */}
        {/* <div class='container'>
          <div class='col-sm-12 col-md-12 col-xs-12'>
            <h6>About</h6>
            <p class='text-text-center'>About Fitness Tracker</p>
          </div>
          <hr />
        </div> */}
        <div class=' footer-m'>
          <div class='col-md-12 col-sm-12 col-xs-12 '>
            <p class='copyright-text'>
              Copyright &copy; 2020 All Rights Reserved
            </p>
          </div>
        </div>
      </footer>
    );
  }
}
