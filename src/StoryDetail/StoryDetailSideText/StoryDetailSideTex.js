import React from "react";
import Button from "react-bootstrap/Button";
import { BsArrowRightShort } from "react-icons/bs";
import { BsPersonPlus } from "react-icons/bs";
import { Row, Col } from "react-bootstrap";
const StoryDetailSideTex = () => {
  return (
    <div>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "end",
        }}
      >
        <div>
          <img
            src={process.env.PUBLIC_URL + "assets/volunteer/volunteer2.png"}
            alt="vol2"
            style={{ borderRadius: "42px", width: "70px", height: "70px" }}
          />
          <div> Charles Vigue</div>
        </div>
        <div>
          <Button
            className="btn btn-primary btn-sm "
            style={{
              backgroundColor: "white",
              color: "#414141",
              borderRadius: "22px",
              fontSize: "14px",
              border: "1px solid black",
            }}
          >
            12,000 Views
          </Button>
        </div>
      </div>
      <div
        style={{
          fontWeight: "300",
          lineHeight: "1.53",
          color: "#414141",
          fontSize: "13px",
        }}
      >
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>
        <p>
          Ut enim ad minim veniam. Sed ut perspiciatis unde omnis iste natus
          error sit voluptatem accusantium doloremque laudantium, totam rem
          aperiam, eaque ipsa quae ab illo inventore.
        </p>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam. Sed ut perspiciatis unde omnis iste natus error sit
          voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque
          ipsa quae ab illo inventore.
        </p>
      </div>
      <Row>
        <Col xs={8}>
          <button
            className="btn bg-transparent "
            style={{
              alignItems: "center",
              border: "1.5px solid #757575",
              borderRadius: "20px",
              fontSize: "14px",
              width: "100%",
            }}
          >
            <BsPersonPlus /> Recommended to a Co-Worker
          </button>
        </Col>
        <Col>
          <button
            className="btn bg-transparent "
            style={{
              alignItems: "center",
              color: "orange",
              border: "1.5px solid orange",
              borderRadius: "20px",
              fontSize: "14px",
              width: "100%",
              paddingTop: "0px",
              paddingBottom: "0px",
            }}
          >
            Open Mission <BsArrowRightShort size={30} />
          </button>
        </Col>
      </Row>
    </div>
  );
};

export default StoryDetailSideTex;
