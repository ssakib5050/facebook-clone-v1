import React from "react";
import "./Header.css";

import {
  Container,
  Navbar,
  Nav,
  Form,
  FormControl,
  Button,
} from "react-bootstrap";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Header = () => {
  return (
    <Navbar
      bg="dark"
      expand="lg"
      variant="dark"
      id="Navbar"
      className="fixed-top"
    >
      <Container>
        {/* User not logged In */}
        {/* <Navbar.Brand href="/" className="font-weight-bold">
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
        </Navbar.Collapse> */}
        {/* User logged In */}
        <div className="header_brand">
          <FontAwesomeIcon icon={["fab", "apple"]} />
          <FontAwesomeIcon icon={["fab", "microsoft"]} />
          <FontAwesomeIcon icon={["fab", "google"]} />

          <FontAwesomeIcon icon="check-square" />
        </div>
      </Container>
    </Navbar>
  );
};

export default Header;
