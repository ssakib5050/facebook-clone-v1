import React from "react";
import "./Home.css";

import { Container, Row, Col } from "react-bootstrap";

import LeftContent from "../LeftContent/LeftContent";

const Home = () => {
  return (
    <div id="home" className="dev">
      <Container>
        <Row>
          <Col className="dev d-md-block d-none" md={3}>
            <LeftContent />
          </Col>
          <Col className="dev" md={6}>
            Home
          </Col>
          <Col className="dev d-md-block d-none" md={3}>
            Home
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Home;
