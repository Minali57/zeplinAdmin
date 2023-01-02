import React, { useState } from "react";
import Search from "./Search/Search";
import Filter from "./Filter/Filter";
import SingleCard from "./Card/SingleCard";
import Paginate from "./Pagination/Pagination";
import Footer from "./Footer/Footer";
import { Data } from "./Data";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import achieved from "./achieved.png";
import { IoLocationOutline } from "react-icons/io5";
import ProgressBar from "react-bootstrap/ProgressBar";
import {
  BsArrowRightShort,
  BsClock,
  BsPersonCheck,
  BsHeart,
  BsPersonPlus,
  BsPerson,
} from "react-icons/bs";
import { Row, Col } from "react-bootstrap";
import ReactStars from "react-rating-stars-component";

const Home = () => {
  const [mission, setMission] = useState(Data);
  const [view, setView] = useState(0);
  const filterData = (filter) => {
    var data = Data;
    if (filter.city.length > 0) {
      data = data.filter((prod) => filter.city.includes(prod.location));
    }
    if (filter.country.length > 0) {
      data = data.filter((prod) => filter.country.includes(prod.country));
    }
    if (filter.theme.length > 0) {
      data = data.filter((prod) => filter.theme.includes(prod.name));
    }
    // if (filter.skill.length > 0) {
    //   data = data.filter((prod) => filter.city.includes(prod.location));
    // }
    if (filter.search !== "") {
      data = data.filter(
        (prod) =>
          prod.title.toLowerCase().includes(filter.search.toLowerCase()) ||
          prod.description.toLowerCase().includes(filter.search.toLowerCase())
      );
    }
    setMission(data);
  };
  const changeView = (type) => {
    setView(type);
  };
  return (
    <>
      <div style={{ padding: "0px 120px" }}>
        {/* <SelectedFilter /> */}
        <Search filterData={filterData} />
        <Filter count={mission.length} changeView={changeView} />
        {view === 0 && (
          <Row xs={1} md={2} lg={3}>
            {mission.map((item, index) => {
              return <SingleCard item={item} index={index} />;
            })}
          </Row>
        )}
        {view === 1 &&
          mission.map((item) => {
            return (
              <>
                <Card
                  style={{
                    width: "36rem",
                    margin: "auto",
                    marginBottom: "30px",
                  }}
                >
                  <Row style={{ marginBottom: "12px" }}>
                    <Col>
                      <div>
                        <Card.Img
                          variant="top"
                          src={`${process.env.PUBLIC_URL}/assets/${item.image}`}
                          style={{ height: "12rem", width: "21rem" }}
                        />
                        <Button
                          className="btn btn-primary btn-sm "
                          style={{
                            backgroundColor: "white",
                            color: "#414141",
                            border: "2px solid white",
                            borderRadius: "22px",
                            position: "relative",
                            margin: "auto",
                            bottom: "12px",
                            fontSize: "14px",
                            left: "114px",
                          }}
                        >
                          {item.name}
                        </Button>
                        <div
                          style={{
                            fontSize: "13px",
                            color: "white",
                            position: "absolute",

                            top: "3%",
                            background: "black",
                            opacity: "0.5",
                            borderRadius: "20px",
                            padding: "2px 5px",
                          }}
                        >
                          <IoLocationOutline fontSize={"20px"} />
                          {item.country}
                        </div>
                      </div>

                      <div
                        style={{
                          fontSize: "13px",
                          color: "white",
                          position: "absolute",
                          right: "44%",
                          top: "3%",
                          background: "black",
                          opacity: "0.5",
                          borderRadius: "20px",
                          padding: "2px 5px",
                        }}
                      >
                        <IoLocationOutline fontSize={"20px"} />
                        {item.location}
                      </div>
                      <div
                        style={{
                          fontSize: "13px",
                          color: "white",
                          fontWeight: "bold",
                          position: "absolute",
                          right: "44%",
                          top: "40%",
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
                          right: "44%",
                          top: "50%",
                          background: "#000",
                          opacity: "0.5",
                          borderRadius: "20px",
                          padding: "2px 5px",
                        }}
                      >
                        {/* <img src={ppl} alt="" /> */}
                        <BsPersonPlus strokeWidth={1} />
                      </div>
                    </Col>
                    <Col>
                      <Card.Body>
                        <Card.Title
                          style={{
                            fontSize: "15px",
                            fontWeight: "normal",
                            color: "#414141",
                          }}
                        >
                          {item.title}
                        </Card.Title>
                      </Card.Body>
                      <div
                        style={{
                          display: "flex",
                          justifyContent: "space-between",
                        }}
                      >
                        <Card.Text
                          style={{
                            fontSize: "14px",
                            color: "#414141",
                          }}
                        >
                          {item.subtitle}
                        </Card.Text>
                        <ReactStars
                          value={item.rating}
                          count={5}
                          size={15}
                          edit={false}
                          isHalf={true}
                          emptyIcon={<i className="far fa-star"></i>}
                          halfIcon={<i className="fa fa-star-half-alt"></i>}
                          fullIcon={<i className="fa fa-star"></i>}
                          activeColor="orange"
                        />
                      </div>
                      {item.subtext != undefined && item.subtext != "" && (
                        <>
                          <div
                            style={{
                              width: "114%",
                              position: "relative",
                              right: "7%",
                            }}
                          >
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
                                bottom: "-11px",
                                left: "0",
                                right: "0",
                                marginLeft: "auto",
                                marginRight: "auto",
                                width: "fit-content",
                              }}
                            >
                              {item.subtext}
                            </Button>
                          </div>
                          <div
                            style={{
                              display: "flex",
                              justifyContent: "space-between",
                              fontSize: "10px",
                            }}
                          >
                            {item.seat !== undefined && item.seat !== "" && (
                              <>
                                <div
                                  style={{
                                    display: "flex",
                                    alignItems: "center",
                                  }}
                                >
                                  {item.hasSeat ? (
                                    <BsPersonCheck fontSize={"14px"} />
                                  ) : (
                                    <BsPerson fontSize={"14px"} />
                                  )}
                                  <div style={{ marginLeft: "5px" }}>
                                    <div> {item.num}</div>
                                    <div style={{ color: "#888" }}>
                                      {" "}
                                      {item.seat}
                                    </div>
                                  </div>
                                </div>
                              </>
                            )}
                            {item.date !== undefined && item.date !== "" && (
                              <>
                                <div
                                  style={{
                                    display: "flex",
                                    alignItems: "center",
                                  }}
                                >
                                  <BsClock fontSize={"14px"} />
                                  <div style={{ marginLeft: "5px" }}>
                                    <div> {item.date}</div>
                                    <div style={{ color: "#888" }}>
                                      {" "}
                                      {item.time}
                                    </div>
                                  </div>
                                </div>
                              </>
                            )}
                            {item.hasProgress != undefined &&
                              item.hasProgress === true && (
                                <>
                                  <div
                                    style={{
                                      display: "flex",
                                      alignItems: "center",
                                      marginRight: "72px",
                                    }}
                                  >
                                    <div>
                                      <img
                                        src={achieved}
                                        alt="aim"
                                        style={{
                                          height: "14px",
                                          marginRight: "5px",
                                        }}
                                      />
                                    </div>
                                    <div style={{ paddingTop: "5px" }}>
                                      <div>
                                        <ProgressBar
                                          variant="warning"
                                          now={item.progress}
                                          style={{
                                            height: "6px",
                                            width: "210%",
                                          }}
                                        />
                                      </div>
                                      <div
                                        style={{
                                          color: "#888",
                                          paddingTop: "5px",
                                        }}
                                      >
                                        {" "}
                                        {item.time}
                                      </div>
                                    </div>
                                  </div>
                                </>
                              )}
                          </div>
                          <div
                            style={{
                              width: "114%",
                              position: "relative",
                              right: "7%",
                            }}
                          >
                            <hr />
                          </div>
                        </>
                      )}
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
                    }}
                  >
                    {item.btntext} <BsArrowRightShort />
                  </Button>
                </Card>
              </>
            );
          })}
      </div>
      <Paginate />
    </>
  );
};

export default Home;
