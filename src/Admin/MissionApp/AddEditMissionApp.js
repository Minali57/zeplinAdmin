import React, { useEffect, useState } from "react";
import { Form, Button, Card } from "react-bootstrap";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useNavigate } from "react-router-dom";
import { useParams } from "react-router-dom";
import { AddApi } from "../Api/Api";
import { addMissionApp } from "../Api/ApiSlice";
import { UpdateApi } from "../Api/Api";
import { updateMissionApp } from "../Api/ApiSlice";
import { useDispatch, useSelector } from "react-redux";
import { editData } from "../Api/Api";
const AddEditMissionApp = () => {
  const { missionapp, isLoading } = useSelector((state) => state.apidata);
  const { id } = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [data, setData] = useState({
    uid: "",
    mid: "",
    title: "",
    uname: "",
    date: "",
  });
  const { uid, mid, title, uname, date } = data;
  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setData({ ...data, [name]: value });
  };
  const btnCancel = () => {
    navigate("/missionapp");
  };
  const handleSubmit = () => {
    if (id !== undefined) {
      var data = JSON.stringify([
        {
          mid: mid,
          uid: uid,
          title: title,
          uname: uname,
          date: date,
          _uuid: id,
          // accepted: false,
        },
      ]);
      // UpdateApi(data, callbackafterSubmit, "missionapp");
      dispatch(updateMissionApp(data)).then(() => {
        callbackafterSubmit();
      });
    } else {
      var data = JSON.stringify([
        {
          mid: mid,
          uid: uid,
          title: title,
          uname: uname,
          date: date,
          _uuid: id,
          // accepted: false,
        },
      ]);
      // AddApi(data, callbackafterSubmit, "missionapp");
      dispatch(addMissionApp(data)).then(() => {
        callbackafterSubmit();
      });
    }
  };
  const callbackafterSubmit = () => {
    toast("Your data is submited", {
      onClose: () => navigate("/missionapp"),
      autoClose: 2000,
    });
  };
  useEffect(() => {
    if (id !== undefined) {
      // editData(id, callbackafterFetch, "missionapp");
      callbackafterFetch(missionapp.find((x) => x._uuid === id));
    }
  }, []);
  const callbackafterFetch = async (editData) => {
    setData({
      mid: editData.mid,
      uid: editData.uid,
      title: editData.title,
      uname: editData.uname,
      date: editData.date,
      // accepted: editData.false,
    });
    console.log("edit");
  };
  return (
    <>
      <ToastContainer position="top-center" />
      <Card>
        <Card.Header>Add</Card.Header>

        <Card.Body>
          <Form>
            <Form.Group className="mb-3">
              <Form.Label>Mission Id</Form.Label>
              <Form.Control
                type="number"
                value={mid}
                name="mid"
                onChange={handleChange}
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Mission Title</Form.Label>
              <Form.Control
                type="text"
                value={title}
                name="title"
                onChange={handleChange}
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>User Id</Form.Label>
              <Form.Control
                type="number"
                name="uid"
                value={uid}
                onChange={handleChange}
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>User Name</Form.Label>
              <Form.Control
                type="text"
                value={uname}
                name="uname"
                onChange={handleChange}
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Application Date</Form.Label>
              <Form.Control
                type="date"
                value={date}
                name="date"
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

export default AddEditMissionApp;
