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
import { DeleteData } from "../Api/Api";
import { deleteUser } from "../Api/ApiSlice";
import { useParams } from "react-router-dom";
import GetData from "../Api/Api";
import { TestApi } from "../Api/Api";
import { useDispatch, useSelector } from "react-redux";
import { getUser } from "../Api/ApiSlice";
import Loader from "../Loader";
const User = () => {
  const dispatch = useDispatch();
  const { user, isLoading } = useSelector((state) => state.apidata);
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
    navigate(`/user/addedit/${id}`);
  };
  const columns = [
    {
      name: "First Name",
      selector: (row) => row.fname,
    },
    {
      name: " Last Name",
      selector: (row) => row.lname,
    },
    {
      name: "Email",
      selector: (row) => row.email,
    },
    {
      name: "Employee_id",
      selector: (row) => row.eid,
    },
    {
      name: "Department",
      selector: (row) => row.department,
    },
    {
      name: "Status",
      cell: (row) => (
        <span>
          {row.select === "1" && "Active"}
          {row.select === "2" && "InActive"}
        </span>
      ),
      conditionalCellStyles: [
        {
          when: (row) => row.select === "1",
          style: {
            color: "green",
          },
        },
        {
          when: (row) => row.select === "2",
          style: {
            color: "red",
          },
        },
      ],
    },
    {
      button: true,
      cell: (row) => (
        <div style={{ display: "flex", gap: "10px" }}>
          <BiEdit
            style={{ color: "orange", fontSize: "20px" }}
            onClick={() => btnEdit(row._uuid)}
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
    navigate("/user/addedit");
  };

  const setUser = async (data) => {
    setData(data);
    setLoading(false);
  };
  useEffect(() => {
    // async function load() {
    //   await GetData("user", setUser);
    // }
    // load();
    dispatch(getUser());
    TestApi(1, "mission");
  }, [dataFetch]);
  // const data = [
  //   {
  //     firstName: "Beetlejuice",
  //     lastName: "patel",
  //     email: "abc@gmail.com",
  //     eId: 1,
  //     departMent: "HR",
  //     status: true,
  //   },
  //   {
  //     firstName: "Ghostbusters",
  //     lastName: "patel",
  //     email: "abc@gmail.com",
  //     eId: 1,
  //     departMent: "HR",
  //     status: false,
  //   },
  //   {
  //     firstName: "minu",
  //     lastName: "patel",
  //     email: "abc@gmail.com",
  //     eId: 1,
  //     departMent: "HR",
  //     status: true,
  //   },
  // ];
  const callbackAfterDelete = () => {
    setDataFetch(!dataFetch);
  };
  const deleteData = async () => {
    // DeleteData("user", deleteId, callbackAfterDelete);
    // console.log("id", deleteId);
    // setShow(false);
    handleClose();
    await dispatch(deleteUser(deleteId));
    callbackAfterDelete();
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
          data={user}
          customStyles={customStyles}
          striped={true}
        />
      </Loader>
    </>
  );
};

export default User;
