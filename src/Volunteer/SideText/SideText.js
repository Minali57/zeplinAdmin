import React from "react";
import "./SideText.css";
import Button from "react-bootstrap/Button";
import ProgressBar from "react-bootstrap/ProgressBar";
import ReactStars from "react-rating-stars-component";
import { BsPersonCheck, BsHeart, BsPersonPlus } from "react-icons/bs";
import { IoLocationOutline } from "react-icons/io5";
import { Col, Row } from "react-bootstrap";
import { BsGlobe } from "react-icons/bs";
import { BsCalendar3 } from "react-icons/bs";
import { BsPerson } from "react-icons/bs";
import { BsArrowRightShort } from "react-icons/bs";
const SideText = () => {
  return (
    <div style={{ padding: "32px", marginRight: "100px" }}>
      <span className="sidetext">
        CSR initiative stands for Coffee & Farmer Equity
      </span>
      <div style={{ fontSize: "14px" }}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam.
      </div>
      <div style={{ width: "114%", position: "relative", right: "7%" }}>
        <hr />
        <Button
          className="btn btn-primary btn-sm"
          style={{
            backgroundColor: "white",
            color: "#414141",
            border: "1px solid grey",
            borderRadius: "22px",
            fontSize: "9px",
            position: "absolute",
            bottom: "-11px",
            left: "0",
            right: "0",
            marginLeft: "auto",
            marginRight: "auto",
            width: "fit-content",
          }}
        >
          Plant 10,000 Trees
        </Button>
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          paddingLeft: "60px",
          paddingRight: "60px",
          paddingTop: "0px",
          marginTop: "0px",
          paddingBottom: "0px",
          marginBottom: "0px",
        }}
      >
        <div style={{ display: "flex", alignItems: "center" }}>
          <BsPersonCheck fontSize={"14px"} />

          <div
            style={{ marginLeft: "5px", color: "#757575", fontSize: "14px" }}
          >
            <div> 10</div>
            <div> Seats left</div>
          </div>
        </div>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            marginRight: "72px",
          }}
        >
          <div>
            <img
              src="achieved.png"
              alt="aim"
              style={{ height: "14px", marginRight: "5px" }}
            />
          </div>
          <div style={{ paddingTop: "5px" }}>
            <div>
              <ProgressBar
                variant="warning"
                now={70}
                style={{ height: "6px", width: "210%" }}
              />
            </div>
            <div
              style={{ paddingTop: "5px", color: "#757575", fontSize: "14px" }}
            >
              {" "}
              8000 achieved
            </div>
          </div>
        </div>
      </div>
      <hr style={{ marginTop: "0" }} />
      {/* <div style={{ display: "flex", flexDirection: "row" }}> */}
      <Row>
        <Col>
          <button
            className="btn bg-transparent "
            style={{
              alignItems: "center",
              justifyContent: "center",
              border: "1.5px solid #757575",
              borderRadius: "20px",
              fontSize: "12px",
              width: "100%",
            }}
          >
            <BsHeart /> Add to Favourite
          </button>
        </Col>
        <Col>
          <button
            className="btn bg-transparent "
            style={{
              alignItems: "center",
              justifyContent: "center",
              border: "1.5px solid #757575",
              borderRadius: "20px",
              fontSize: "12px",
              width: "100%",
            }}
          >
            <BsPersonPlus /> Recommended to a Co-Worker
          </button>
        </Col>
      </Row>
      {/* </div> */}

      <div style={{ width: "100%", position: "relative" }}>
        <hr style={{ top: "0px" }} />
        <div
          style={{
            position: "absolute",
            left: "0",
            right: "0",
            margin: "auto",
            background: "#fff",
            width: "fit-content",
            top: "-11px",
          }}
        >
          <ReactStars
            value={0}
            count={5}
            size={15}
            emptyIcon={<i className="far fa-star"></i>}
            halfIcon={<i className="fa fa-star-half-alt"></i>}
            fullIcon={<i className="fa fa-star"></i>}
            activeColor="orange"
          />
        </div>
      </div>
      <Row>
        <Col xs={3}>
          <Col
            xs={12}
            style={{
              border: "1px solid black ",
              height: "85%",
              padding: "12px",
            }}
          >
            <div>
              <IoLocationOutline fontSize={"20px"} />
            </div>
            <div
              style={{ fontSize: "12px", fontWeight: "300", color: " #757575" }}
            >
              City
            </div>
            <div style={{ fontSize: "14px", color: "#414141" }}> London</div>
          </Col>
        </Col>
        <Col xs={3}>
          <Col
            xs={12}
            style={{
              border: "1px solid black ",
              height: "85%",
              padding: "12px",
            }}
          >
            <div>
              <BsGlobe fontSize={"18px"} />
            </div>
            <div
              style={{ fontSize: "12px", fontWeight: "300", color: " #757575" }}
            >
              Theme
            </div>
            <div style={{ fontSize: "14px", color: "#414141" }}>
              Environment
            </div>
          </Col>
        </Col>
        <Col xs={3}>
          <Col
            xs={12}
            style={{
              border: "1px solid black ",
              height: "85%",
              padding: "12px",
            }}
          >
            <div>
              <BsCalendar3 fontSize={"18px"} />
            </div>
            <div
              style={{ fontSize: "12px", fontWeight: "300", color: " #757575" }}
            >
              {" "}
              date
            </div>
            <div style={{ fontSize: "14px", color: "#414141" }}>
              {" "}
              Ongoing Opportunity
            </div>
          </Col>
        </Col>
        <Col xs={3}>
          <Col
            xs={12}
            style={{
              border: "1px solid black ",
              height: "85%",
              padding: "12px",
            }}
          >
            <div>
              <BsPerson fontSize={"20px"} />
            </div>
            <div
              style={{ fontSize: "12px", fontWeight: "300", color: " #757575" }}
            >
              Organization
            </div>
            <div style={{ fontSize: "14px", color: "#414141" }}>
              {" "}
              CSE Network
            </div>
          </Col>
        </Col>
      </Row>
      <Button
        className="btn btn-primary btn-sm"
        style={{
          backgroundColor: "white",
          color: "orange",
          border: "2px solid orange",
          borderRadius: "22px",
          display: "flex",
          alignItems: "center",
          margin: "auto",
          height: "32px",
          width: "30%",
          paddingTop: "2px",
          marginTop: "10px",
        }}
      >
        Apply <BsArrowRightShort />
      </Button>
    </div>
  );
};

export default SideText;
