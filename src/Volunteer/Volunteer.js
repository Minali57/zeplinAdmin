import React from "react";
import "./Volunteer.css";
import ImageSection from "./ImageSection/ImageSection";
import SideText from "./SideText/SideText";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import MiddleText from "./MiddleText/MiddleText";
import BottomPart from "./BottomPart/BottomPart";
const Volunteer = () => {
  return (
    <div>
      <Row>
        <Col xs={6}>
          <ImageSection />
        </Col>

        <Col xs={6}>
          <SideText />
        </Col>
      </Row>
      <Row>
        <Col>
          <MiddleText />
        </Col>
      </Row>
      <hr />
      <BottomPart />
    </div>
  );
};

export default Volunteer;
