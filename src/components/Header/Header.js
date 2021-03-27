import React from "react";
import "./Header.css";

import {
  Container,
  Navbar,
  Nav,
  NavDropdown,
  Form,
  FormControl,
  Button,
} from "react-bootstrap";

const Header = () => {
  return (
    <Navbar bg="dark" expand="lg" variant="dark" id="Navbar">
      <Container>
        <Navbar.Brand href="#home" className="font-weight-bold">
          Facebook Clone v1
        </Navbar.Brand>

        <Navbar.Toggle aria-controls="basic-navbar-nav" />

        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto"></Nav>
          <Form inline>
            <FormControl
              type="text"
              placeholder="Email Address"
              className="mr-sm-2 mb-2 mb-md-0"
            />
            <FormControl
              type="text"
              placeholder="Password"
              className="mr-sm-2 mb-2 mb-md-0"
            />
            <Button variant="outline-light">Login</Button>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
