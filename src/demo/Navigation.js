import React from 'react'
import ReactDOM from 'react-dom'

import {Nav, Navbar, NavItem, NavDropdown, MenuItem} from 'react-bootstrap'
 
class Navigation extends React.Component {

  render() {

    return (
      <div>

        <Navbar inverse collapseOnSelect>
          <Navbar.Header>
            <Navbar.Brand>
              <a href="#">Basic Info</a>
            </Navbar.Brand>
            <Navbar.Toggle />
          </Navbar.Header>
          <Navbar.Header>
            <Navbar.Brand>
              <a href="#">Sports</a>
            </Navbar.Brand>
            <Navbar.Toggle />
          </Navbar.Header>
          <Navbar.Header>
            <Navbar.Brand>
              <a href="#">Games</a>
            </Navbar.Brand>
            <Navbar.Toggle />
          </Navbar.Header>
          <Navbar.Header>
            <Navbar.Brand>
              <a href="#">History</a>
            </Navbar.Brand>
            <Navbar.Toggle />
          </Navbar.Header>
          <Navbar.Header>
            <Navbar.Brand>
              <a href="#">Contact</a>
            </Navbar.Brand>
            <Navbar.Toggle />
          </Navbar.Header>
          
          <Nav>
          <NavDropdown eventKey={3} title="Dropdown" id="basic-nav-dropdown">
            <MenuItem eventKey={3.1}>Action</MenuItem>
            <MenuItem eventKey={3.2}>Another action</MenuItem>
            <MenuItem eventKey={3.3}>Something else here</MenuItem>
            <MenuItem divider />
            <MenuItem eventKey={3.3}>Separated link</MenuItem>
          </NavDropdown>
          </Nav>

          <Navbar.Collapse>
     
            <Nav pullRight>
              <NavItem eventKey={1} href="#">Hello!</NavItem>
            </Nav>

          </Navbar.Collapse>


        </Navbar>
              
      </div>
    )

  }
}

export default Navigation