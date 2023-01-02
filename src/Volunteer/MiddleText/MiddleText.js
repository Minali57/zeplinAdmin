import React from "react";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Container from "react-bootstrap/Container";
import NavItem from "./NavItem";
import MiddlesideText from "./MiddlesideText";
const MiddleText = () => {
  return (
    <>
      <Container>
        <Row>
          <Col lg="8">
            <NavItem />
           
            <div></div>
          </Col>
          <Col>
            <MiddlesideText />
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default MiddleText;
