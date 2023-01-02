import { React, useState, useEffect } from "react";
import { Form, Button, Card } from "react-bootstrap";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useNavigate } from "react-router-dom";
import { useParams } from "react-router-dom";
import { AddApi } from "../Api/Api";
import { addStory } from "../Api/ApiSlice";
import { useDispatch } from "react-redux";
const AddEditStory = () => {
  const [data, setData] = useState({
    stitle: "",
    fname: "",
    mtitle: "",
  });
  const dispatch = useDispatch();
  const { stitle, fname, mtitle } = data;
  const navigate = useNavigate();
  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setData({ ...data, [name]: value });
  };
  const btnCancel = () => {
    navigate("/story");
  };
  const handleSubmit = () => {
    var data = JSON.stringify([
      {
        stitle: stitle,
        fname: fname,
        mtitle: mtitle,
      },
    ]);
    // AddApi(data, callbackafterSubmit, "story");
    dispatch(addStory(data)).then(() => {
      callbackafterSubmit();
    });
  };
  const callbackafterSubmit = () => {
    toast("Your data is submited", {
      onClose: () => navigate("/story"),
      autoClose: 2000,
    });
  };
  return (
    <>
      <ToastContainer position="top-center" />
      <Card>
        <Card.Header>Add</Card.Header>

        <Card.Body>
          <Form>
            <Form.Group className="mb-3">
              <Form.Label>Story Title</Form.Label>
              <Form.Control
                type="text"
                value={stitle}
                name="stitle"
                onChange={handleChange}
              />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Full Name</Form.Label>
              <Form.Control
                type="text"
                value={fname}
                name="fname"
                onChange={handleChange}
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Mission Title</Form.Label>
              <Form.Control
                type="mtitle"
                value={mtitle}
                name="mtitle"
                onChange={handleChange}
              />
            </Form.Group>
          </Form>
        </Card.Body>
      </Card>
      <div style={{ float: "right", padding: "14px" }}>
        <Button
          variant="outline-secondary"
          size="sm"
          style={{ borderRadius: "22px", padding: "0 12px" }}
          onClick={btnCancel}
        >
          Cancel
        </Button>{" "}
        <Button
          variant="outline-warning"
          size="sm"
          style={{ borderRadius: "22px", padding: "0 12px" }}
          onClick={handleSubmit}
        >
          Save
        </Button>{" "}
      </div>
    </>
  );
};

export default AddEditStory;
