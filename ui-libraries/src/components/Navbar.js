import React, { useState } from 'react';

import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavbarText,
} from "reactstrap";

import {NavLink} from "react-router-dom";

function NavbarComponent(args) {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <div>
      <Navbar {...args} expand="md" className='bg-primary navbar-dark'>
        <NavbarBrand href="/">Jual-in</NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="me-auto" navbar>
              <NavLink to="/" className="text-light mx-3" style={{ textDecoration: "none" }}>Home</NavLink>
              <NavLink to="/dashboard" className="text-light mx-3" style={{ textDecoration: "none" }}>Dashboard</NavLink>
              <NavLink to="/top" className="text-light mx-3" style={{ textDecoration: "none" }}>Top Rated</NavLink>
          </Nav>
          <NavbarText>Simple Text</NavbarText>
        </Collapse>
      </Navbar>
    </div>
  );
}

export default NavbarComponent;