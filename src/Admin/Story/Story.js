import React, { useState, useEffect } from "react";
import { Form, Button, Card, Modal } from "react-bootstrap";
import DataTable from "react-data-table-component";

import { CiSearch } from "react-icons/ci";
import { IoIosAdd } from "react-icons/io";
import { AiOutlineCheckCircle } from "react-icons/ai";
import { AiOutlineCloseCircle } from "react-icons/ai";
import { RiDeleteBin6Line } from "react-icons/ri";
import { BiEdit } from "react-icons/bi";
import InputGroup from "react-bootstrap/InputGroup";
import { useNavigate } from "react-router-dom";
import { DeleteData } from "../Api/Api";
import { deleteStory } from "../Api/ApiSlice";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getStory } from "../Api/ApiSlice";
import GetData from "../Api/Api";
import Loader from "../Loader";
const Story = () => {
  const dispatch = useDispatch();
  const { story, isLoading } = useSelector((state) => state.apidata);
  const navigate = useNavigate();
  const [loading, setLoading] = useState(true);
  const [show, setShow] = useState(false);
  const [data, setData] = useState([]);
  const [deleteId, setDeleteId] = useState("");
  const [dataFetch, setDataFetch] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = (id) => {
    setShow(true);
    console.log("id1", id);
    setDeleteId(id);
  };
  const customStyles = {
    headCells: {
      style: {
        backgroundColor: "#F5F5F5",
        color: "blue",
        fontSize: "14px",
        border: "1px solid #ECECEC",
      },
    },
  };

  const callbackAfterDelete = () => {
    setDataFetch(!dataFetch);
  };
  const deleteData = async () => {
    // DeleteData("story", deleteId, callbackAfterDelete);
    // console.log("id", deleteId);
    // setShow(false);
    handleClose();
    await dispatch(deleteStory(deleteId));
    callbackAfterDelete();
  };
  const columns = [
    {
      name: "Story Title",
      selector: (row) => row.title,
    },
    {
      name: "Full name",
      selector: (row) => row.uname,
    },
    {
      name: "Mission Title",
      selector: (row) => row.mission,
    },

    {
      button: true,
      cell: (row) => (
        <div style={{ display: "flex", gap: "10px" }}>
          <Button
            variant="outline-warning"
            style={{
              borderRadius: "22px",
              padding: "0px",
              fontSize: "10px",
              width: "40px",
            }}
            onClick={btnClick}
          >
            view
          </Button>
          <AiOutlineCheckCircle style={{ color: "green", fontSize: "20px" }} />
          <AiOutlineCloseCircle
            style={{ color: "red", fontSize: "20px" }}
            // onClick={() => handleShow(row._uuid)}
          />
          <RiDeleteBin6Line
            style={{ fontSize: "20px" }}
            onClick={() => handleShow(row._uuid)}
          />
        </div>
      ),
    },
  ];
  const btnClick = () => {
    navigate("/story/addedit");
  };
  const setStory = async (data) => {
    setData(data);
    setLoading(false);
  };
  useEffect(() => {
    // async function load() {
    //   await GetData("story", setStory);
    // }
    // load();
    dispatch(getStory());
  }, [dataFetch]);
  return (
    <>
      <Modal show={show} onHide={handleClose} centered>
        <Modal.Header closeButton>
          <Modal.Title fontSize={"5px"}>Confirm Delete</Modal.Title>
        </Modal.Header>
        <Modal.Body>Are you sureyou want to delete this item</Modal.Body>
        <Modal.Footer style={{ justifyContent: "center", gap: "5px" }}>
          <Button
            variant="outline-secondary"
            onClick={handleClose}
            style={{
              borderRadius: "22px",
              padding: "0 12px",
              height: "33px",
            }}
          >
            Cancel
          </Button>
          <Button
            variant="outline-warning"
            style={{
              borderRadius: "22px",
              padding: "0 12px",
              height: "33px",
            }}
            onClick={deleteData}
          >
            Delete
          </Button>
        </Modal.Footer>
      </Modal>
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <div>
          <InputGroup className="mb-3">
            <InputGroup.Text
              id="basic-addon1"
              style={{
                backgroundColor: "transparent",
                borderRight: "0px",
                paddingRight: "0px",
              }}
            >
              <CiSearch />
            </InputGroup.Text>
            <Form.Control
              placeholder="Search"
              aria-label="Username"
              aria-describedby="basic-addon1"
              style={{ borderLeft: "0px" }}
            />
          </InputGroup>
        </div>
        <div></div>
      </div>
      <Loader loading={isLoading}>
        <DataTable
          columns={columns}
          // data={data}
          data={story}
          customStyles={customStyles}
          striped={true}
        />
      </Loader>
    </>
  );
};

export default Story;
