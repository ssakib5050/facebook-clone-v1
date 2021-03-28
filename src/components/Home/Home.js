import React from "react";
import "./Home.css";

import { Container, Row, Col } from "react-bootstrap";

import LeftContent from "../LeftContent/LeftContent";
import RightContent from "../RightContent/RightContent";
import PostInput from "../PostInput/PostInput";

const Home = () => {
  return (
    <div id="home" className="dev">
      <Container>
        <Row>
          <Col className="dev d-md-block d-none" md={3}>
            <LeftContent />
          </Col>
          <Col className="dev" md={6}>
            <PostInput />
          </Col>
          <Col className="dev d-md-block d-none" md={3}>
            <RightContent />
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Home;
