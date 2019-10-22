import React, {Component} from 'react';
import {
  Navbar,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink } from 'reactstrap/lib';

class Navigation extends Component {
  render() {
    return (
      <div className="navBar">
        <Navbar color="light" light expand="md">
          <NavbarBrand href="/">Home</NavbarBrand>
            <Nav className="ml-auto" navbar>
              <NavItem>
                  <NavLink href=" ">About</NavLink>
                </NavItem>
                <NavItem>
                  <NavLink href=" ">Contact</NavLink>
                </NavItem>
            </Nav>
        </Navbar>
      </div>
    );
  }
}

export default Navigation;