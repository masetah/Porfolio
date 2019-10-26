import React, {Component} from 'react';

import {
  Navbar,
  NavbarBrand,
  Nav,
  NavLink,
} from 'reactstrap/lib';

class Footer extends Component {
    render() {
        return (
        <div className="footer">
            <Navbar color="faded" light>
                <NavbarBrand href="/" className="mr-auto"><img className="mace" src="/Logos/mace.png" alt="Profile site"/> Mace Barbarian 2019 </NavbarBrand>
                <Nav>
                    <NavLink id="github" href="https://github.com/masetah"  ><img className="logo" src="/Logos/github-logo.png" alt="Github Logo"/> </NavLink> 
                    <NavLink id="linkedin" href="https://www.linkedin.com/in/masetaherian/"  ><img className="logo" src="/Logos/linkedin.png" alt="Linkedin Logo"/> </NavLink>
                    <NavLink id="facebook" href="https://www.facebook.com/mase.taherian" ><img className="logo" src="/Logos/facebook.png" alt="Facebook Logo"/> </NavLink>
                    <NavLink id="resume" href="https://docs.google.com/document/d/10WLVziclEpZTavVlsRC3ToLlMVfBwFeCMBfGVLkJ7a4/edit?usp=sharing" target="_blank"><img className="logo" src="/Logos/resume.png" alt="Resume Logo"/> </NavLink>
                </Nav>
            </Navbar>
        </div>
        );
    }
}

export default Footer;