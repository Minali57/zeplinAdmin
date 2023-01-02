import { useState } from "react";
import Container from "react-bootstrap/Container";
import "./Header.css";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import img1 from "../../user_img.png";
import { BsChevronDown } from "react-icons/bs";
import DropDown from "../DropDown/DropDown";
import { Button } from "react-bootstrap";
import { Row, Col } from "react-bootstrap";
import { Modal, Form } from "react-bootstrap";
import Dropzone1 from "../../ShareStory/DropZone/DropZone";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useNavigate } from "react-router-dom";
function Header() {
  const [show, setShow] = useState(false);
  const [mission, setMission] = useState({
    country: "",
    city: "",
    title: "",
    decription: "",
    organization_name: "",
    organization_Details: "",
    startDate: "",
    endDate: "",
    totalSeats: "",
    deadline: "",
    theme: "",
    skills: "",
    availability: "",
  });
  const {
    country,
    city,
    title,
    decription,
    organization_name,
    organization_Details,
    startDate,
    endDate,
    totalSeats,
    deadline,
    theme,
    skills,
    availability,
  } = mission;
  const navigate = useNavigate();
  // console.log("mis", mission);
  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;

    setMission({ ...mission, [name]: value });
  };
  const cancelData = () => {
    setShow(false);
  };
  const submitData = () => {
    toast("Your data is submited");
    console.log("mission", mission);
  };
  const missionHandleShow = () => {
    console.log("modal");
    setShow(true);
  };
  const handleClose = () => {
    setShow(false);
  };
  return (
    <div style={{ margin: "1% 8%" }}>
      <ToastContainer position="top-center" />
      <Navbar expand="lg">
        <Container fluid style={{ paddingRight: "unset" }}>
          <Row style={{ width: "100%" }}>
            {/* <Col md={{ span: 4, offset: 2 }}> */}
            <Col>
              <span
                style={{
                  color: "#595959",
                }}
                onClick={() => navigate("/")}
              >
                Explore
              </span>
              &nbsp;
              <BsChevronDown
                style={{
                  width: "11px",
                }}
              />
              &nbsp; &nbsp; &nbsp;{" "}
              <span
                style={{
                  color: "#595959",
                }}
                data-testid="storyListingLink"
                onClick={() => navigate("/story/listing")}
              >
                Stories
              </span>{" "}
              &nbsp;&nbsp;&nbsp;{" "}
              <span
                style={{
                  color: "#595959",
                }}
                onClick={() => navigate("/policy")}
              >
                Policy
              </span>{" "}
              &nbsp;
              <BsChevronDown
                style={{
                  width: "11px",
                }}
              />
            </Col>
            <Col>
              <button
                style={{
                  backgroundColor: "white",
                  color: "orange",
                  border: "1.5px solid orange",
                  borderRadius: "20px",
                  position: "relative",
                  left: "450px",
                  fontSize: "14px",
                }}
                data-testid="btn-submit"
                onClick={missionHandleShow}
              >
                submit new mission
              </button>

              <Modal show={show} onHide={handleClose} animation={false}>
                <Modal.Header closeButton>
                  <Modal.Title>Add New Mission</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                  <Form style={{ fontSize: "14px" }}>
                    <Row>
                      <Col>
                        <Form.Label>Country</Form.Label>
                        <Form.Select
                          name="country"
                          value={country}
                          onChange={handleChange}
                          style={{ color: "#757575" }}
                        >
                          <option value="DICTUM">Select Country</option>
                          <option value="CONSTANCY">Constancia</option>
                          <option value="COMPLEMENT">Complemento</option>
                        </Form.Select>
                      </Col>
                      <Col>
                        <Form.Label>City</Form.Label>
                        <Form.Select
                          name="city"
                          value={city}
                          onChange={handleChange}
                          style={{ color: "#757575" }}
                          placeholder="Select city"
                        >
                          <option value="DICTUM">Select Country</option>
                          <option value="CONSTANCY">Constancia</option>
                          <option value="COMPLEMENT">Complemento</option>
                        </Form.Select>
                      </Col>
                    </Row>
                    <Form.Label>Mission Title</Form.Label>
                    <Form.Control
                      type="title"
                      name="title"
                      value={title}
                      onChange={handleChange}
                      style={{ color: "#757575" }}
                      placeholder="Enter Mission Title"
                      aria-describedby="basic-addon1"
                    />
                    <Form.Label>Mission Description</Form.Label>
                    <Form.Control
                      as="textarea"
                      name="decription"
                      value={decription}
                      onChange={handleChange}
                      rows={3}
                      placeholder="Enter your Message"
                      style={{ color: "#757575" }}
                    />
                    <Form.Label>Mission Organisation Name</Form.Label>
                    <Form.Control
                      type="text"
                      name="organization_name"
                      value={organization_name}
                      onChange={handleChange}
                      style={{ color: "#757575" }}
                      placeholder="Enter mission organisation name"
                      aria-describedby="basic-addon1"
                    />
                    <Form.Label>Mission Organisation Detail</Form.Label>
                    <Form.Control
                      as="textarea"
                      name="organization_Details"
                      value={organization_Details}
                      onChange={handleChange}
                      style={{ color: "#757575" }}
                      placeholder="Enter your message"
                      aria-describedby="basic-addon1"
                      rows={3}
                    />
                    <Form.Label>Start Date</Form.Label>
                    <Form.Control
                      type="Date"
                      placeholder="Select date"
                      value={startDate}
                      name="startDate"
                      onChange={handleChange}
                    />
                    <Form.Label>End Date</Form.Label>
                    <Form.Control
                      type="Date"
                      placeholder="Select date"
                      value={endDate}
                      name="endDate"
                      onChange={handleChange}
                    />
                    <Form.Label>Total seats</Form.Label>
                    <Form.Control
                      type="text"
                      name="totalSeats"
                      value={totalSeats}
                      onChange={handleChange}
                      style={{ color: "#757575" }}
                      placeholder="enter total seats"
                      aria-describedby="basic-addon1"
                    />
                    <Form.Label>Mission Registration deadline</Form.Label>
                    <Form.Control
                      type="text"
                      name="deadline"
                      value={deadline}
                      onChange={handleChange}
                      style={{ color: "#757575" }}
                      placeholder="Enter mission registration deadline"
                      aria-describedby="basic-addon1"
                    />

                    <Form.Label>Mission Theme</Form.Label>
                    <Form.Select
                      name="theme"
                      value={theme}
                      onChange={handleChange}
                      style={{ color: "#757575" }}
                      placeholder="Enter your name"
                    >
                      <option value="DICTUM">select mission theme</option>
                      <option value="CONSTANCY">Constancia</option>
                      <option value="COMPLEMENT">Complemento</option>
                    </Form.Select>
                    <Form.Label>Mission Skills</Form.Label>
                    <Form.Select
                      name="skills"
                      value={skills}
                      onChange={handleChange}
                      style={{ color: "#757575" }}
                      placeholder="Enter your name"
                    >
                      <option value="DICTUM">select mission skill</option>
                      <option value="CONSTANCY">Constancia</option>
                      <option value="COMPLEMENT">Complemento</option>
                    </Form.Select>
                    <Form.Label>Mission Images</Form.Label>
                    <Dropzone1 />

                    <Form.Label>Mission Documents</Form.Label>
                    <Dropzone1 />
                    <Form.Label>Mission Availability</Form.Label>
                    <Form.Select
                      name="availability"
                      value={availability}
                      onChange={handleChange}
                      style={{ color: "#757575" }}
                    >
                      <option value="DICTUM">Select availability</option>
                      <option value="CONSTANCY">Constancia</option>
                      <option value="COMPLEMENT">Complemento</option>
                    </Form.Select>
                  </Form>
                </Modal.Body>
                <Modal.Footer>
                  <Button
                    className="btn btn-primary btn-sm"
                    style={{
                      backgroundColor: "white",
                      color: "#757575",
                      border: "2px solid #757575",
                      borderRadius: "22px",
                      float: "right",
                      marginRight: "0px",
                      overflow: "auto",
                    }}
                    onClick={cancelData}
                  >
                    Cancel
                  </Button>
                  <button
                    className="btn btn-primary btn-sm"
                    style={{
                      backgroundColor: "white",
                      color: "orange",
                      border: "2px solid orange",
                      borderRadius: "22px",
                      float: "right",
                      marginRight: "0px",
                      overflow: "auto",
                    }}
                    onClick={submitData}
                    data-testid="btn-addMission-Modal"
                  >
                    Submit
                  </button>
                </Modal.Footer>
              </Modal>
            </Col>
            <Col
              md={{ span: 4, offset: 2 }}
              style={{ textAlign: "right", paddingRight: "unset" }}
            >
              <div
                data-testid="btn-edit-profile"
                onClick={() => navigate("/edit")}
              >
                <img src={img1} className="userImg" alt="user" />
                <span
                  style={{
                    color: "#595959",
                  }}
                >
                  Even Donohue
                </span>{" "}
                &nbsp;&nbsp;
                <BsChevronDown
                  style={{
                    width: "11px",
                  }}
                />
              </div>
            </Col>
          </Row>
        </Container>
      </Navbar>
    </div>
  );
}

export default Header;
