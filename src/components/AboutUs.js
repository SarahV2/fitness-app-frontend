import React, { Component } from 'react';
import './../About.css';
import Footer from './Footer';
export default class AboutUs extends Component {
  render() {
    return (
      <div>
        <div class='image-aboutus-banner' style={{ marginTop: '50px' }}>
          <div class='container'>
            <div class='row'>
              <div class='col-md-12'>
                <h1 class='lg-text '>About Us</h1>
                <p class='image-aboutus-para'></p>
              </div>
            </div>
          </div>
        </div>
        <div class='aboutus-secktion paddingTB60'>
          <div class='container'>
            <div class='row'>
              <div class='col-md-6 '>
                <h1 class='strong'>Who we are</h1>
                <p class='lead'> </p>
              </div>
              <div class='col-md-6'>
                <p>
                  provide featues that help the users to reach to their daily
                  workout plan
                </p>
              </div>
              <br />
              <br />
              <br />
              <br />
              <br />

              <div class='col-md-6'>
                <h1 class='strong'>Our vision</h1>
                <p class='lead'> </p>
              </div>
              <div class='col-md-6'>
                <p>
                  From cluttered mess to organized success, from laziness to
                  highest potential, from planning to execution{' '}
                </p>
              </div>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    );
  }
}
