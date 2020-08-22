import React, { Component } from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import { Redirect } from 'react-router-dom';

export class NavigationBar extends Component {
  state = {
    redirect: false,
    loggedIn: false,
  };
  componentDidMount() {
    let currentUser = localStorage.getItem('currentUserID');
    if (currentUser) {
      this.setState({
        loggedIn: true,
      });
    }
  }

  handleLogout = () => {
    localStorage.removeItem('currentUserID');
    localStorage.removeItem('currentName');
    this.setState({
      loggedIn: false,
    });
    window.location.href = '/';
  };
  render() {
    if (this.state.redirect) {
      return <Redirect to='/' />;
    }

    const { loggedIn } = this.state;
    const name = JSON.parse(localStorage.getItem('currentName'));

    return (
      <Navbar collapseOnSelect expand='lg' bg='dark' variant='dark'>
        <Navbar.Brand href='/'>
          <img
            style={{ width: '150px' }}
            src={require('./../images/hello.png')}
          />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls='responsive-navbar-nav' />
        <Navbar.Collapse id='responsive-navbar-nav'>
          <Nav className='mr-auto'>
            <Nav.Link href='/tips'>Tips</Nav.Link>
            <Nav.Link href='#aboutus'>About Us</Nav.Link>
          </Nav>
          <Nav>
            {!loggedIn ? (
              <Nav.Link href='/login'>Login</Nav.Link>
            ) : (
              <Nav>
                <Nav.Link id='userName' disabled>
                  Hello, {name}
                </Nav.Link>
                <Nav.Link href='#' onClick={() => this.handleLogout()}>
                  Logout
                </Nav.Link>
              </Nav>
            )}

            {!loggedIn ? <Nav.Link href='/signup'>Sign Up</Nav.Link> : ''}
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    );
  }
}

export default NavigationBar;
