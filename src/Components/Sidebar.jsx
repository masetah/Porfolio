import React, {Component} from 'react';
import { Navbar, Nav, NavItem, NavLink } from 'reactstrap/lib';

class Sidebar extends Component {
    render(){
        return(
            <div className="sidebar">
                <Navbar color="light" light expand="md">
                    <Nav className="ml-auto" navbar>
                        <NavItem>
                            <NavLink href="https://masetah.github.io/index.html">Project 1</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink href="https://travel-too.herokuapp.com">Project 2</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink href="https://werqout.herokuapp.com">Project 3</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink href="/">Project 4(not deployed yet)</NavLink>
                        </NavItem>
                    </Nav>
                </Navbar>
            </div>

        )
    }

}

export default Sidebar;