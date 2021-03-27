import React from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import "./Login.css";

const Login = () => {
  return (
    <div id="Login">
      <Container>
        <Row className="justify-content-around">
          <Col
            md={6}
            className="d-none d-md-flex flex-column justify-content-center "
          >
            <img src="/internet.svg" className="img-fluid" />
          </Col>
          <Col md={4} className="d-flex flex-column justify-content-center ">
            <h2 className="font-weight-bold text-left">Create an account</h2>
            <p className="font-weight-bold text-left">
              It's free & always will be
            </p>

            <Form>
              <Form.Group controlId="formBasicEmail">
                <Form.Control type="email" placeholder="Enter email" />
              </Form.Group>

              <Form.Group controlId="formBasicPassword">
                <Form.Control type="password" placeholder="Password" />
              </Form.Group>

              <Form.Group controlId="formBasicPassword" className="text-left">
                <Button variant="primary" type="submit">
                  Submit
                </Button>
              </Form.Group>
            </Form>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Login;
