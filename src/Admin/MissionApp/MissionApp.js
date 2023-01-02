import { React, useState, useEffect } from "react";
import { Form, Button, Card, Modal } from "react-bootstrap";
import DataTable from "react-data-table-component";
import { Editor } from "react-draft-wysiwyg";
import { EditorState } from "draft-js";
import { BiEdit } from "react-icons/bi";
import { CiSearch } from "react-icons/ci";
import { IoIosAdd } from "react-icons/io";
import { AiOutlineCheckCircle } from "react-icons/ai";
import { AiOutlineCloseCircle } from "react-icons/ai";
import { RiDeleteBin6Line } from "react-icons/ri";
import InputGroup from "react-bootstrap/InputGroup";
import { useNavigate } from "react-router-dom";
import { useParams } from "react-router-dom";
import { DeleteData } from "../Api/Api";
import { deleteMissionApp } from "../Api/ApiSlice";
import GetData from "../Api/Api";
import { useDispatch, useSelector } from "react-redux";
import { getMissionApp } from "../Api/ApiSlice";
import Loader from "../Loader";
const MissionApp = () => {
  const dispatch = useDispatch();
  const { missionapp, isLoading } = useSelector((state) => state.apidata);
  const { id } = useParams();
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

  const navigate = useNavigate();
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
  const btnEdit = (id) => {
    //  navigate(`/cms/add/${id}`);
    navigate(`/missionapp/addedit/${id}`);
  };
  const callbackAfterDelete = () => {
    setDataFetch(!dataFetch);
  };
  const deleteData = async () => {
    // DeleteData("missionapp", deleteId, callbackAfterDelete);
    // console.log("id", deleteId);
    // setShow(false);
    handleClose();
    await dispatch(deleteMissionApp(deleteId));
    callbackAfterDelete();
  };

  const columns = [
    {
      name: "Mission Id",
      selector: (row) => row.mid,
    },
    {
      name: "Mission Title",
      selector: (row) => row.title,
    },
    {
      name: "User Id",
      selector: (row) => row.uid,
    },
    {
      name: "User Name",
      selector: (row) => row.uname,
    },
    {
      name: "Application Date",
      selector: (row) => row.date,
    },

    {
      button: true,
      cell: (row) => (
        <div style={{ display: "flex", gap: "10px" }}>
          <BiEdit
            style={{ color: "orange", fontSize: "20px" }}
            onClick={() => btnEdit(row._uuid)}
          />
          <AiOutlineCheckCircle style={{ color: "green", fontSize: "20px" }} />
          <AiOutlineCloseCircle
            style={{ color: "red", fontSize: "20px" }}
            onClick={() => handleShow(row._uuid)}
          />
        </div>
      ),
    },
  ];
  const setMissionApp = async (data) => {
    setData(data);
    setLoading(false);
  };
  useEffect(() => {
    // async function load() {
    //   await GetData("missionapp", setMissionApp);
    // }
    // load();
    dispatch(getMissionApp());
  }, [dataFetch]);
  const btnClick = () => {
    navigate("/missionapp/addedit");
    console.log("cclicked");
  };

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
        <div>
          <Button
            variant="outline-warning"
            style={{
              borderRadius: "22px",
              padding: "0 12px",
              height: "37px",
            }}
            onClick={btnClick}
          >
            <IoIosAdd style={{ color: "orange", fontSize: "20px" }} /> Add
          </Button>
        </div>
      </div>
      <Loader loading={isLoading}>
        <DataTable
          columns={columns}
          // data={data}
          data={missionapp}
          customStyles={customStyles}
          striped={true}
        />
      </Loader>
    </>
  );
};

export default MissionApp;
