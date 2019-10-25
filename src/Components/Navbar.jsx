import React, { useState } from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem } from 'reactstrap';

  const Navigation = (props) => {
    const [isOpen, setIsOpen] = useState(false);
  
    const toggle = () => setIsOpen(!isOpen);
  // render() {
    return (
      <div className="navBar">
         <Navbar color="light" light expand="md">
        <NavbarBrand href="/">Home</NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="ml-auto" navbar>
            <NavItem>
              <NavLink href="/about">About Me</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/resume">Resume</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/contact"> Contact </NavLink>
            </NavItem>
            <UncontrolledDropdown nav inNavbar>
              <DropdownToggle nav caret>
                Projects
              </DropdownToggle>
              <DropdownMenu right>
                <DropdownItem>
                <NavLink href=" "> AppPraise Me </NavLink>
                </DropdownItem>
                <DropdownItem>
                <NavLink href="https://masetah.github.io"> Star Wars Galacticpedia</NavLink>
                </DropdownItem>
                <DropdownItem>
                <NavLink href="https://travel-too.herokuapp.com"> Travel Too </NavLink>
                </DropdownItem>
                <DropdownItem divider/>
                <DropdownItem>
                <NavLink href="/projects"> Projects Page </NavLink>
                </DropdownItem>
              </DropdownMenu>
            </UncontrolledDropdown>
          </Nav>
        </Collapse>
      </Navbar>
      </div>
    );
  }
// }

export default Navigation;





