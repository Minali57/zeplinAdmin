import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { Data } from "../Data";
import { IoLocationOutline } from "react-icons/io5";
import achieved from "./achieved.png";
import ProgressBar from "react-bootstrap/ProgressBar";
import {
  BsArrowRightShort,
  BsClock,
  BsPersonCheck,
  BsHeart,
  BsPersonPlus,
  BsPerson,
} from "react-icons/bs";
import ReactStars from "react-rating-stars-component";
function ListView() {
  return (
    <>
      {Data.map((item) => {
        return (
          <>
            <Card style={{ width: "18rem", margin: "auto" }}>
              <Card.Img
                variant="top"
                src={`${process.env.PUBLIC_URL}/assets/${item.image}`}
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
                  top: "31%",
                  left: "32%",
                  fontSize: "14px",
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
                {item.location}
              </div>
              <div
                style={{
                  fontSize: "13px",
                  color: "white",
                  fontWeight: "bold",
                  position: "absolute",
                  right: "3%",
                  top: "20%",
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
                  top: "27%",
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
                  {item.title}
                </Card.Title>
                <Card.Text
                  style={{
                    fontSize: "10px",
                    marginBottom: "3px",
                    color: "#757575",
                  }}
                >
                  {item.description}
                </Card.Text>
                <div
                  style={{ display: "flex", justifyContent: "space-between" }}
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
                            style={{ display: "flex", alignItems: "center" }}
                          >
                            {item.hasSeat ? (
                              <BsPersonCheck fontSize={"14px"} />
                            ) : (
                              <BsPerson fontSize={"14px"} />
                            )}
                            <div style={{ marginLeft: "5px" }}>
                              <div> {item.num}</div>
                              <div style={{ color: "#888" }}> {item.seat}</div>
                            </div>
                          </div>
                        </>
                      )}
                      {item.date !== undefined && item.date !== "" && (
                        <>
                          <div
                            style={{ display: "flex", alignItems: "center" }}
                          >
                            <BsClock fontSize={"14px"} />
                            <div style={{ marginLeft: "5px" }}>
                              <div> {item.date}</div>
                              <div style={{ color: "#888" }}> {item.time}</div>
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
                                  style={{ height: "14px", marginRight: "5px" }}
                                />
                              </div>
                              <div style={{ paddingTop: "5px" }}>
                                <div>
                                  <ProgressBar
                                    variant="warning"
                                    now={item.progress}
                                    style={{ height: "6px", width: "210%" }}
                                  />
                                </div>
                                <div
                                  style={{ color: "#888", paddingTop: "5px" }}
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
              </Card.Body>
            </Card>
          </>
        );
      })}
    </>
  );
}

export default ListView;
