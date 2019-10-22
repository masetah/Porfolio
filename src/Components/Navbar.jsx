import React, {Component} from 'react';
import {
  Navbar,
  NavbarBrand,
  Nav,
  NavLink } from 'reactstrap/lib';

class Navigation extends Component {
  render() {
    return (
      <div className="navBar">
        <Navbar color="light" light expand="md">
          <NavbarBrand href="/">Home</NavbarBrand>
            <Nav className="ml-auto" navbar>
                  <NavLink href=" ">About</NavLink>
                  <NavLink href=" ">Contact</NavLink>
            </Nav>
        </Navbar>
      </div>
    );
  }
}

export default Navigation;