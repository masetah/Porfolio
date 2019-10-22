import React, {Component} from 'react';
import { Navbar, Nav, NavLink } from 'reactstrap/lib';

class Sidebar extends Component {
    render(){
        return(
            <div className="sidebar">
                <Navbar color="light" light expand="md">
                    <Nav className="ml-auto" navbar>
                        <NavLink href="https://masetah.github.io/index.html">Project 1</NavLink>
                        <NavLink href="https://travel-too.herokuapp.com">Project 2</NavLink>
                        <NavLink href="https://werqout.herokuapp.com">Project 3</NavLink>
                        <NavLink href="/">Project 4(not deployed yet)</NavLink>
                    </Nav>
                </Navbar>
            </div>

        )
    }

}

export default Sidebar;