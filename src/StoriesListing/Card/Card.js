import React from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import { useNavigate } from "react-router-dom";
import { StoriData } from "../StoriData";
const SingleCard = ({ data }) => {
  const navigate = useNavigate();
  return (
    <Col
      style={{
        marginBottom: "1.5%",
        display: "flex",
        justifyContent: "center",
      }}
    >
      <div data-testid="btn-story-detail" onClick={() => navigate("/story/detail")}>
        <Card style={{ width: "19rem" }}>
          <Card.Img
            variant="top"
            src={`${process.env.PUBLIC_URL}/assets/volunteer/${data.img}`}
          />

          <Button
            className="btn btn-primary btn-sm "
            style={{
              backgroundColor: "white",
              color: "#414141",
              border: "2px solid white",
              borderRadius: "22px",
              position: "relative",
              bottom: "20px",
              width: "fit-content",
              fontSize: "14px",
              margin: "auto",
              left: "0",
              right: "0",
            }}
          >
            {data.type}
          </Button>
          {/* {data.isBtn && (
          <Button
            style={{
              backgroundColor: "white",
              position: "relative",
              color: "black",
            }}
          >
            {data.btn}
          </Button>
        )} */}
          <Card.Body>
            <Card.Title
              style={{
                fontSize: "17px",
                fontWeight: "normal",
                color: "#414141",
              }}
            >
              {data.title}
            </Card.Title>
            <Card.Text
              style={{
                fontSize: "10px",
                marginBottom: "3px",
                color: "#757575",
              }}
            >
              {data.description}
            </Card.Text>
            <div style={{ display: "flex", marginTop: "11px", gap: "10px" }}>
              <div>
                <img
                  src={`${process.env.PUBLIC_URL}/assets/volunteer/${data.image}`}
                  alt="vol1"
                  style={{ height: "28px", borderRadius: "40px" }}
                />
              </div>
              <div>{data.name}</div>
            </div>
          </Card.Body>
        </Card>
      </div>
    </Col>
  );
};

export default SingleCard;
