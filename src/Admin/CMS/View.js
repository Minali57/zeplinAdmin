import React, { useState, useEffect } from "react";
import { Form, Button, Card, Modal } from "react-bootstrap";
import DataTable from "react-data-table-component";
import { Editor } from "react-draft-wysiwyg";
import { EditorState } from "draft-js";
import { BiEdit } from "react-icons/bi";
import { CiSearch } from "react-icons/ci";
import { IoIosAdd } from "react-icons/io";
import { RiDeleteBin6Line } from "react-icons/ri";
import InputGroup from "react-bootstrap/InputGroup";
import { useNavigate } from "react-router-dom";
import GetData from "../Api/Api";
import { getCms } from "../Api/ApiSlice";
import { DeleteData } from "../Api/Api";
import { deleteCms } from "../Api/ApiSlice";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import Loader from "../Loader";
const CMS = () => {
  const dispatch = useDispatch();
  const { cms, isLoading } = useSelector((state) => state.apidata);
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
    navigate(`/cms/add/${id}`);
  };
  const columns = [
    {
      name: "Title",
      selector: (row) => row.title,
    },
    {
      name: "Status",
      cell: (row) => (
        <span>
          {row.status === "1" && "Active"}
          {row.status === "2" && "InActive"}
        </span>
      ),
      conditionalCellStyles: [
        {
          when: (row) => row.status === "1",
          style: {
            color: "green",
          },
        },
        {
          when: (row) => row.status === "2",
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
          {/* <BiEdit style={{ color: "orange", fontSize: "20px" }} onClick={(row._uuid) = > navigate("/add/:id")} /> */}
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

  // const data = [
  //   {
  //     id: 1,
  //     title:
  //       "Desktop publishing software like Aldus PageMaker including versions",
  //     status: true,
  //   },
  //   {
  //     id: 2,
  //     title: "Various version have envolved over the years ",
  //     status: false,
  //   },
  //   {
  //     id: 3,
  //     title: "A Latin professor at Hampden-Sydney College in Virginia",
  //     status: false,
  //   },
  //   {
  //     id: 4,
  //     title:
  //       "Suffered alternation in some form, by injected humour, or randomised words",
  //     status: true,
  //   },
  //   {
  //     id: 5,
  //     title: "Et harum quiderm rerum",
  //     status: true,
  //   },
  // ];
  const setCMS = async (data) => {
    setData(data);
    setLoading(false);
  };
  useEffect(() => {
    // async function load() {
    //   await GetData("cms", setCMS);
    // }
    // load();
    dispatch(getCms());
  }, [dataFetch]);
  const btnClick = () => {
    navigate("/cms/add");
  };

  const callbackAfterDelete = () => {
    setDataFetch(!dataFetch);
  };
  const deleteData = async () => {
    // DeleteData("cms", deleteId, callbackAfterDelete);
    handleClose();
    await dispatch(deleteCms(deleteId));
    // await dispatch(getCms());
    callbackAfterDelete();

    console.log("id", deleteId);
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
          data={cms}
          customStyles={customStyles}
          striped={true}
          pagination={true}
        />
      </Loader>
    </>
  );
};

export default CMS;
