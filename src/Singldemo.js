import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import CardGroup from "react-bootstrap/CardGroup";
import img from "./grow.png";
import achieved from "./achieved.png";
import "./SingleCard.css";
import { Data } from "../Data";
import ReactStars from "react-rating-stars-component";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import ProgressBar from "react-bootstrap/ProgressBar";
import {
  BsArrowRightShort,
  BsClock,
  BsPersonCheck,
  BsHeart,
  BsPersonPlus,
  BsPerson,
} from "react-icons/bs";
import { IoLocationOutline } from "react-icons/io5";

function SingleCard() {
  return (
    <>
      <Row xs={1} md={2} lg={3}>
        <Col style={{ marginBottom: "10%" }}>
          <Card style={{ marginBottom: "7%" }}>
            <Card.Img
              variant="top"
              src={img}
              style={{ height: "9rem", width: "auto" }}
            />
            <Button
              className="btn btn-primary btn-sm "
              style={{
                backgroundColor: "white",
                color: "#414141",
                border: "2px solid white",
                borderRadius: "22px",
                position: "absolute",
                margin: "auto",
                top: "37%",
                left: "32%",
                fontSize: "14px",
              }}
            >
              Environment
            </Button>
            <div
              style={{
                fontSize: "13px",
                color: "white",
                position: "absolute",
                right: "3%",
                top: "3%",
                background: "black",
                opacity: "0.5",
                borderRadius: "20px",
                padding: "2px 5px",
              }}
            >
              <IoLocationOutline fontSize={"20px"} />
              Toronto
            </div>
            <div
              style={{
                fontSize: "13px",
                color: "white",
                fontWeight: "bold",
                position: "absolute",
                right: "3%",
                top: "26%",
                background: "black",
                opacity: "0.5",
                borderRadius: "20px",
                padding: "2px 5px",
              }}
            >
              <BsHeart strokeWidth={1} />
            </div>
            <div
              style={{
                fontSize: "13px",
                color: "white",
                fontWeight: "bold",
                position: "absolute",
                right: "3%",
                top: "34%",
                background: "#000",
                opacity: "0.5",
                borderRadius: "20px",
                padding: "2px 5px",
              }}
            >
              {/* <img src={ppl} alt="" /> */}
              <BsPersonPlus strokeWidth={1} />
            </div>
            <Card.Body>
              <Card.Title
                style={{
                  fontSize: "17px",
                  fontWeight: "normal",
                  color: "#414141",
                }}
              >
                Lorem ipsum dolor sit amet consectetur.
              </Card.Title>
              <Card.Text
                style={{
                  fontSize: "10px",
                  marginBottom: "3px",
                  color: "#757575",
                }}
              >
                Some quick example text to build on the card title and make up
                the
              </Card.Text>
              <div style={{ display: "flex", justifyContent: "space-between" }}>
                <Card.Text
                  style={{
                    fontSize: "14px",
                    color: "#414141",
                  }}
                >
                  Tree Canada
                </Card.Text>
                <ReactStars
                  count={5}
                  size={15}
                  edit={true}
                  isHalf={true}
                  emptyIcon={<i className="far fa-star"></i>}
                  halfIcon={<i className="fa fa-star-half-alt"></i>}
                  fullIcon={<i className="fa fa-star"></i>}
                  activeColor="orange"
                />
              </div>
              <div style={{ width: "114%", position: "relative", right: "7%" }}>
                <hr style={{ marginTop: "0px" }} />
                <Button
                  className="btn btn-primary btn-sm"
                  style={{
                    backgroundColor: "white",
                    color: "#414141",
                    border: "1px solid grey",
                    borderRadius: "22px",
                    fontSize: "9px",
                    position: "absolute",
                    left: "21.5%",
                    bottom: "-11px",
                  }}
                >
                  From 10/01/2019 until 25/02/2019
                </Button>
              </div>
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  fontSize: "10px",
                }}
              >
                <div style={{ display: "flex", alignItems: "center" }}>
                  <BsPersonCheck fontSize={"14px"} />
                  <div style={{ marginLeft: "5px" }}>
                    <div>10</div>
                    <div style={{ color: "#888" }}> Seat left</div>
                  </div>
                </div>
                <div style={{ display: "flex", alignItems: "center" }}>
                  <BsClock fontSize={"14px"} />
                  <div style={{ marginLeft: "5px" }}>
                    <div>09/01/2019</div>
                    <div style={{ color: "#888" }}> Deadline</div>
                  </div>
                </div>
              </div>
            </Card.Body>
          </Card>
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
            }}
          >
            Apply <BsArrowRightShort />
          </Button>
        </Col>
        <Col style={{ marginBottom: "10%" }}>
          <Card style={{ marginBottom: "7%" }}>
            <Card.Img
              variant="top"
              src={img}
              style={{ height: "9rem", width: "auto" }}
            />
            <Button
              className="btn btn-primary btn-sm "
              style={{
                backgroundColor: "white",
                color: "#414141",
                border: "2px solid white",
                borderRadius: "22px",
                position: "absolute",
                margin: "auto",
                top: "37%",
                left: "32%",
                fontSize: "14px",
              }}
            >
              Environment
            </Button>
            <div
              style={{
                fontSize: "13px",
                color: "white",
                position: "absolute",
                right: "3%",
                top: "3%",
                background: "black",
                opacity: "0.5",
                borderRadius: "20px",
                padding: "2px 5px",
              }}
            >
              <IoLocationOutline fontSize={"20px"} />
              Toronto
            </div>
            <div
              style={{
                fontSize: "13px",
                color: "white",
                fontWeight: "bold",
                position: "absolute",
                right: "3%",
                top: "26%",
                background: "black",
                opacity: "0.5",
                borderRadius: "20px",
                padding: "2px 5px",
              }}
            >
              <BsHeart strokeWidth={1} />
            </div>
            <div
              style={{
                fontSize: "13px",
                color: "white",
                fontWeight: "bold",
                position: "absolute",
                right: "3%",
                top: "34%",
                background: "#000",
                opacity: "0.5",
                borderRadius: "20px",
                padding: "2px 5px",
              }}
            >
              {/* <img src={ppl} alt="" /> */}
              <BsPersonPlus strokeWidth={1} />
            </div>
            <Card.Body>
              <Card.Title
                style={{
                  fontSize: "17px",
                  fontWeight: "normal",
                  color: "#414141",
                }}
              >
                Lorem ipsum dolor sit amet consectetur.
              </Card.Title>
              <Card.Text
                style={{
                  fontSize: "10px",
                  marginBottom: "3px",
                  color: "#757575",
                }}
              >
                Some quick example text to build on the card title and make up
                the
              </Card.Text>
              <div style={{ display: "flex", justifyContent: "space-between" }}>
                <Card.Text
                  style={{
                    fontSize: "14px",
                    color: "#414141",
                  }}
                >
                  Tree Canada
                </Card.Text>
                <ReactStars
                  count={5}
                  size={15}
                  edit={true}
                  isHalf={true}
                  emptyIcon={<i className="far fa-star"></i>}
                  halfIcon={<i className="fa fa-star-half-alt"></i>}
                  fullIcon={<i className="fa fa-star"></i>}
                  activeColor="orange"
                />
              </div>
              <div style={{ width: "114%", position: "relative", right: "7%" }}>
                <hr style={{ marginTop: "0px" }} />
                <Button
                  className="btn btn-primary btn-sm"
                  style={{
                    backgroundColor: "white",
                    color: "#414141",
                    border: "1px solid grey",
                    borderRadius: "22px",
                    fontSize: "9px",
                    position: "absolute",
                    left: "21.5%",
                    bottom: "-11px",
                  }}
                >
                  From 10/01/2019 until 25/02/2019
                </Button>
              </div>
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  fontSize: "10px",
                }}
              >
                <div style={{ display: "flex", alignItems: "center" }}>
                  <BsPerson fontSize={"14px"} />
                  <div style={{ marginLeft: "5px" }}>
                    <div>10</div>
                    <div style={{ color: "#888" }}> Seat left</div>
                  </div>
                </div>
                <div style={{ display: "flex", alignItems: "center" }}>
                  <BsClock fontSize={"14px"} />
                  <div style={{ marginLeft: "5px" }}>
                    <div>09/01/2019</div>
                    <div style={{ color: "#888" }}> Deadline</div>
                  </div>
                </div>
              </div>
            </Card.Body>
          </Card>
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
            }}
          >
            Apply <BsArrowRightShort />
          </Button>
        </Col>
        <Col style={{ marginBottom: "10%" }}>
          <Card style={{ marginBottom: "7%" }}>
            <Card.Img
              variant="top"
              src={img}
              style={{ height: "9rem", width: "auto" }}
            />
            <Button
              className="btn btn-primary btn-sm "
              style={{
                backgroundColor: "white",
                color: "black",
                border: "2px solid white",
                borderRadius: "22px",
                position: "absolute",
                margin: "auto",
                top: "37%",
                left: "32%",
                fontSize: "14px",
              }}
            >
              Environment
            </Button>
            <div
              style={{
                fontSize: "13px",
                color: "white",
                position: "absolute",
                right: "3%",
                top: "3%",
                background: "black",
                opacity: "0.5",
                borderRadius: "20px",
                padding: "2px 5px",
              }}
            >
              <IoLocationOutline fontSize={"20px"} />
              Toronto
            </div>
            <div
              style={{
                fontSize: "13px",
                color: "white",
                fontWeight: "bold",
                position: "absolute",
                right: "3%",
                top: "26%",
                background: "black",
                opacity: "0.5",
                borderRadius: "20px",
                padding: "2px 5px",
              }}
            >
              <BsHeart strokeWidth={1} />
            </div>
            <div
              style={{
                fontSize: "13px",
                color: "white",
                fontWeight: "bold",
                position: "absolute",
                right: "3%",
                top: "34%",
                background: "#000",
                opacity: "0.5",
                borderRadius: "20px",
                padding: "2px 5px",
              }}
            >
              {/* <img src={ppl} alt="" /> */}
              <BsPersonPlus strokeWidth={1} />
            </div>
            <Card.Body>
              <Card.Title
                style={{
                  fontSize: "17px",
                  fontWeight: "normal",
                  color: "#414141",
                }}
              >
                Lorem ipsum dolor sit amet consectetur.
              </Card.Title>
              <Card.Text
                style={{
                  fontSize: "10px",
                  marginBottom: "3px",
                  color: "#757575",
                }}
              >
                Some quick example text to build on the card title and make up
                the
              </Card.Text>
              <div style={{ display: "flex", justifyContent: "space-between" }}>
                <Card.Text
                  style={{
                    fontSize: "14px",
                    color: "#414141",
                  }}
                >
                  Tree Canada
                </Card.Text>
                <ReactStars
                  count={5}
                  size={15}
                  edit={true}
                  isHalf={true}
                  emptyIcon={<i className="far fa-star"></i>}
                  halfIcon={<i className="fa fa-star-half-alt"></i>}
                  fullIcon={<i className="fa fa-star"></i>}
                  activeColor="orange"
                />
              </div>
              <div style={{ width: "114%", position: "relative", right: "7%" }}>
                <hr style={{ marginTop: "0px" }} />
                <Button
                  className="btn btn-primary btn-sm"
                  style={{
                    backgroundColor: "white",
                    color: "#414141",
                    border: "1px solid grey",
                    borderRadius: "22px",
                    fontSize: "9px",
                    position: "absolute",
                    left: "21.5%",
                    bottom: "-11px",
                  }}
                >
                  From 10/01/2019 until 25/02/2019
                </Button>
              </div>
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  fontSize: "10px",
                }}
              >
                <div style={{ display: "flex", alignItems: "center" }}>
                  <BsPersonCheck fontSize={"14px"} />
                  <div style={{ marginLeft: "5px" }}>
                    <div>10</div>
                    <div style={{ color: "#888" }}> Seat left</div>
                  </div>
                </div>
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    minWidth: "50%",
                  }}
                >
                  <img
                    src={achieved}
                    alt="aim"
                    style={{ height: "14px", marginRight: "5px" }}
                  />
                  <div>
                    <div>
                      <ProgressBar
                        variant="warning"
                        now={75}
                        style={{ height: "6px", width: "190%" }}
                      />
                    </div>
                    <div style={{ color: "#888" }}> 8000 achieved</div>
                  </div>
                </div>
              </div>
            </Card.Body>
          </Card>
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
            }}
          >
            Apply <BsArrowRightShort />
          </Button>
        </Col>
      </Row>
    </>
  );
}

export default SingleCard;
