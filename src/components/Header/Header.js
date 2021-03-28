import React from "react";
import "./Header.css";

import HeaderNotification from "../HeaderNotification/HeaderNotification";

import {
  Container,
  Navbar,
  Nav,
  Form,
  FormControl,
  Button,
  Row,
  Col,
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

        {/* Desktop User logged In */}
        <Row className=" w-100">
          <Col className="">
            <div className="d-flex ">
              <a href="" className="d-flex header_brand mr-2 ">
                <FontAwesomeIcon
                  icon={["fab", "facebook-square"]}
                  className="header_brand_icon text-white h2 mb-0"
                />
              </a>

              <Form inline className=" flex-grow-1">
                <FormControl
                  type="text"
                  placeholder="Search"
                  className="mr-sm-2 flex-grow-1"
                  size="sm"
                />
                <Button variant="outline-light btn-sm">
                  <FontAwesomeIcon
                    icon={["fas", "search"]}
                    className="header_brand_icon text-white  mb-0"
                    size="lg"
                  />
                </Button>
              </Form>
            </div>
          </Col>
          <Col className="">
            <div className="d-flex justify-content-around align-items-center">
              <div className="d-flex align-items-center">
                <a
                  href=""
                  className="d-flex align-items-center text-decoration-none"
                >
                  <img
                    src="https://via.placeholder.com/150"
                    alt=""
                    className="header_profile_img"
                  />
                  <a href="#" className="text-white mr-1 text-decoration-none">
                    Rajib
                  </a>
                </a>

                <a href="#" className="text-white  mr-1 text-decoration-none">
                  Home
                </a>
                <a href="#" className="text-white  mr-1 text-decoration-none">
                  Create
                </a>
              </div>

              <div>
                <HeaderNotification notification="2" icon="user" />
                <HeaderNotification notification="2" icon="comment" />
                <HeaderNotification notification="2" icon="bell" />
                <HeaderNotification icon={["fas", "ellipsis-v"]} />

                {/* <a href="#" className="text-white mr-2">
                  <FontAwesomeIcon icon="user" size="lg" />
                </a> */}

                {/* <a href="#" className="text-white mr-2">
                  <FontAwesomeIcon icon="comment" size="lg" />
                </a> */}
                {/* <a href="#" className="text-white mr-2">
                  <FontAwesomeIcon icon="bell" size="lg" />
                </a> */}
                {/* <a href="#" className="text-white">
                  <FontAwesomeIcon icon={["fas", "ellipsis-v"]} size="lg" />
                </a> */}
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </Navbar>
  );
};

export default Header;
