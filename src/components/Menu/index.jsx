import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
 } from 'reactstrap';

export default class Menu extends Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false,
    };
  }

  toggle() {
    this.setState({
      isOpen: !this.state.isOpen,
    });
  }

  render() {
    return (
        <Navbar color="light" light expand="md">
          <NavbarBrand href="/">SEED-REACT</NavbarBrand>

          <NavbarToggler onClick={this.toggle} />

          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="ml-auto" navbar>
              <NavItem>
                <Link className='nav-link' to="/">Home</Link>
              </NavItem>
              <NavItem>
                <Link className='nav-link' to="/about">About</Link>
              </NavItem>
              <NavItem>
                <Link className='nav-link' to="/chat">Chat</Link>
              </NavItem>
              <NavItem>
                <NavLink href="https://github.com/ivoneijr/seed-react">GitHub</NavLink>
              </NavItem>
            </Nav>
          </Collapse>
        </Navbar>
    );
  }
}
