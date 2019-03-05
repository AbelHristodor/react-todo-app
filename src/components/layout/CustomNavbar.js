import React, { Component } from "react";
import { Navbar, Nav, NavDropdown } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";

export default class CustomNavbar extends Component {
  render() {
    return (
      <Navbar bg="white" expand="lg" style={{"borderBottom":"1px solid #3333"}}>
        <Navbar.Brand className="text-dark">Todo</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <LinkContainer to="/">
              <Nav.Link>Home</Nav.Link>
            </LinkContainer>
            <LinkContainer to="/about">
              <Nav.Link>About</Nav.Link>
            </LinkContainer>
            <NavDropdown title="Dropdown" id="basic-nav-dropdown">
              <LinkContainer to="/" style={DropdownItemStyle}>
                <NavDropdown.Item>Action</NavDropdown.Item>
              </LinkContainer>
              <LinkContainer to="/" style={DropdownItemStyle}>
                <NavDropdown.Item>Another action</NavDropdown.Item>
              </LinkContainer>
              <LinkContainer to="/" style={DropdownItemStyle}>
                <NavDropdown.Item>Something</NavDropdown.Item>
              </LinkContainer>
              <NavDropdown.Divider style={DividerStyle} />
              <LinkContainer to="/" style={DropdownItemStyle}>
                <NavDropdown.Item>Separated link</NavDropdown.Item>
              </LinkContainer>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    );
  }
}

const DropdownItemStyle = {
  backgroundColor: "#fff",
  color: "#000"
};

const DividerStyle = {
  borderColor: "#3333"
}
