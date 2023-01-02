import React from "react";
import ImageSection from "../Volunteer/ImageSection/ImageSection";
import SideText from "../Volunteer/SideText/SideText";
import { Row, Col } from "react-bootstrap";
import StoryDetailSideTex from "./StoryDetailSideText/StoryDetailSideTex";
import BottomText from "./BottomText/BottomText";
const StoryDetail = () => {
  return (
    <>
      <div style={{ margin: "0px 12%" }}>
        <Row>
          <Col xs={6}>
            <ImageSection />
          </Col>

          <Col xs={6}>
            <StoryDetailSideTex />
          </Col>
        </Row>
        <Row>
          <Col>
            <BottomText />
          </Col>
        </Row>
      </div>
    </>
  );
};

export default StoryDetail;
