import React, { useEffect, useState } from "react";
import { Form, Button, Card } from "react-bootstrap";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useNavigate } from "react-router-dom";
import { useParams } from "react-router-dom";
import { editData, UpdateApi, AddApi } from "../Api/Api";
import { addUser } from "../Api/ApiSlice";
import { useDispatch, useSelector } from "react-redux";
import { updateUser } from "../Api/ApiSlice";
const AddEditUser = () => {
  const { user } = useSelector((state) => state.apidata);
  const { id } = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [data, setData] = useState({
    fname: "",
    lname: "",
    email: "",
    department: "",
    eid: "",
    select: "1",
  });
  const { fname, lname, email, department, select, eid } = data;
  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;

    setData({ ...data, [name]: value });
  };
  const btnCancel = () => {
    navigate("/user");
  };
  useEffect(() => {
    console.log("param", id);
    if (id !== undefined) {
      // editData(id, callbackafterFetch, "user");
      callbackafterFetch(user.find((x) => x._uuid === id));
    }
  }, []);
  const callbackafterFetch = async (editData) => {
    setData({
      fname: editData.fname,
      lname: editData.lname,
      email: editData.email,
      department: editData.department,
      eid: editData.eid,
      select: editData.select,
    });
  };
  const handleSubmit = () => {
    if (id !== undefined) {
      var data = JSON.stringify([
        {
          fname: fname,
          lname: lname,
          email: email,
          department: department,
          select: select,
          eid: eid,
          _uuid: id,
        },
      ]);
      // UpdateApi(data, callbackafterSubmit, "user");
      dispatch(updateUser(data)).then(() => {
        callbackafterSubmit();
      });
    } else {
      var data = JSON.stringify([
        {
          fname: fname,
          lname: lname,
          email: email,
          department: department,
          select: select,
          eid: eid,
          _uuid: id,
        },
      ]);
      // AddApi(data, callbackafterSubmit, "user");
      dispatch(addUser(data)).then(() => {
        callbackafterSubmit();
      });
    }
  };
  const callbackafterSubmit = () => {
    toast("Your data is submited", {
      onClose: () => navigate("/user"),
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
              <Form.Label>First Name</Form.Label>
              <Form.Control
                type="text"
                value={fname}
                name="fname"
                onChange={handleChange}
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Last Name</Form.Label>
              <Form.Control
                type="text"
                value={lname}
                name="lname"
                onChange={handleChange}
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Email</Form.Label>
              <Form.Control
                type="email"
                value={email}
                name="email"
                onChange={handleChange}
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Employee_id</Form.Label>
              <Form.Control
                type="text"
                value={eid}
                name="eid"
                onChange={handleChange}
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Department</Form.Label>
              <Form.Control
                type="text"
                name="department"
                value={department}
                onChange={handleChange}
              />
            </Form.Group>
            <Form.Label>Status</Form.Label>
            <Form.Select name="select" value={select} onChange={handleChange}>
              <option value="1">Active</option>
              <option value="2">InActive</option>
            </Form.Select>
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

export default AddEditUser;
