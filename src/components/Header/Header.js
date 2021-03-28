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
  Dropdown,
  DropdownButton,
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
        <Row className=" w-100 d-none d-md-flex">
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

              <div className="d-flex align-items-center">
                <HeaderNotification notification="2" icon="user" />
                <HeaderNotification notification="2" icon="comment" />
                <HeaderNotification notification="2" icon="bell" />

                <DropdownButton
                  menuAlign="right"
                  title={
                    <FontAwesomeIcon icon={["fas", "ellipsis-v"]} size="lg" />
                  }
                  id="header_more_btn"
                >
                  <Dropdown.Item eventKey="1">Action 1</Dropdown.Item>
                  <Dropdown.Item eventKey="1">Action 2</Dropdown.Item>
                  <Dropdown.Item eventKey="1">Action 3</Dropdown.Item>
                  <Dropdown.Item eventKey="1">Action 4</Dropdown.Item>
                  <Dropdown.Item eventKey="1">Action 5</Dropdown.Item>
                  <Dropdown.Divider />
                  <Dropdown.Item eventKey="4">Logout</Dropdown.Item>
                </DropdownButton>

                {/* <HeaderNotification icon={["fas", "ellipsis-v"]} /> */}

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

        {/* Mobile User Logged In  */}
        <Row className="d-md-none d-flex text-center flex-grow-1 align-items-center">
          <Col className="">
            <HeaderNotification notification="2" icon="user" />
          </Col>
          <Col className="">
            <HeaderNotification icon="search" />
          </Col>
          <Col className="">
            <HeaderNotification notification="3" icon="comment" />
          </Col>
          <Col className="">
            <HeaderNotification notification="4" icon="bell" />
          </Col>
          <Col className="">
            <DropdownButton
              menuAlign="right"
              title={<FontAwesomeIcon icon={["fas", "ellipsis-v"]} />}
              id="header_more_btn"
            >
              <Dropdown.Item eventKey="1">Action 1</Dropdown.Item>
              <Dropdown.Item eventKey="1">Action 2</Dropdown.Item>
              <Dropdown.Item eventKey="1">Action 3</Dropdown.Item>
              <Dropdown.Item eventKey="1">Action 4</Dropdown.Item>
              <Dropdown.Item eventKey="1">Action 5</Dropdown.Item>
              <Dropdown.Divider />
              <Dropdown.Item eventKey="4">Logout</Dropdown.Item>
            </DropdownButton>
          </Col>
        </Row>
      </Container>
    </Navbar>
  );
};

export default Header;
