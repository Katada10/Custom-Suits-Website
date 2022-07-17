import React from "react";
import { useState } from "react";


import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Switch, Route, Link } from 'react-router-dom';

import { Button } from "bootstrap";

function Navigation() {
  

  return (
      <Navbar bg="dark" variant="dark">
          <Container fluid>
            <Navbar.Brand className="ms-auto" as={Link} to="/">Elegant</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
            
              <Nav className="ms-auto">
                <Nav.Link as={Link} to="/shopar" >عربي </Nav.Link>
                <Nav.Link as={Link} to="/measure">Measure</Nav.Link>
                <Nav.Link as={Link} className="pr-5" to="/shop">Shop</Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
    
   );
 }
 
 export default Navigation;
 