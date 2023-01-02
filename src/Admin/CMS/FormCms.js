import React, { useEffect, useState } from "react";
import { Form, Button, Card } from "react-bootstrap";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Editor } from "react-draft-wysiwyg";
import { EditorState } from "draft-js";
import { useNavigate } from "react-router-dom";
import { AddApi, UpdateApi } from "../Api/Api";
import { addCms } from "../Api/ApiSlice";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { editData } from "../Api/Api";
import { updateCms } from "../Api/ApiSlice";
import { convertFromRaw, convertToRaw } from "draft-js";
const FormCms = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const { cms, isLoading } = useSelector((state) => state.apidata);
  const navigate = useNavigate();
  const [data, setData] = useState({
    title: "",
    slug: "",
    select: "1",
  });
  const { title, slug, select } = data;
  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;

    setData({ ...data, [name]: value });
  };
  const [editorState, setEditorState] = useState(() =>
    EditorState.createEmpty()
  );
  const btnCancel = () => {
    navigate("/cms");
  };
  const handleSubmit = () => {
    if (id !== undefined) {
      var data = JSON.stringify([
        {
          title: title,
          description: JSON.stringify(
            convertToRaw(editorState.getCurrentContent())
          ),
          slug: slug,
          status: select,
          _uuid: id,
        },
      ]);
      // UpdateApi(data, callbackafterSubmit, "cms");
      dispatch(updateCms(data)).then(() => {
        callbackafterSubmit();
      });
    } else {
      var data = JSON.stringify([
        {
          title: title,
          description: JSON.stringify(
            convertToRaw(editorState.getCurrentContent())
          ),
          slug: slug,
          status: select,
        },
      ]);
      // AddApi(data, callbackafterSubmit, "cms");
      dispatch(addCms(data)).then(() => {
        callbackafterSubmit();
      });
    }
  };
  const callbackafterSubmit = () => {
    toast("Your data is submited", {
      onClose: () => navigate("/cms"),
      autoClose: 2000,
    });
  };
  useEffect(() => {
    console.log("param", id);
    if (id !== undefined) {
      // editData(id, callbackafterFetch, "cms");
      callbackafterFetch(cms.find((x) => x._uuid === id));
    }
  }, []);
  const callbackafterFetch = async (editData) => {
    setData({
      title: editData.title,
      slug: editData.slug,
      select: editData.status,
    });
    const content = convertFromRaw(JSON.parse(editData.description));
    setEditorState(EditorState.createWithContent(content));
  };
  return (
    <>
      <ToastContainer position="top-center" />
      <Card>
        <Card.Header>Add</Card.Header>

        <Card.Body>
          <Form>
            <Form.Group className="mb-3">
              <Form.Label>Title</Form.Label>
              <Form.Control
                type="text"
                value={title}
                name="title"
                onChange={handleChange}
              />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Description</Form.Label>
              <Editor
                toolbar={{
                  options: ["inline"],
                  inline: { inDropdown: false },
                  list: { inDropdown: true },
                  textAlign: { inDropdown: true },
                  link: { inDropdown: true },
                  history: { inDropdown: true },
                }}
                editorState={editorState}
                onEditorStateChange={setEditorState}
                toolbarStyle={{ backgroundColor: "rgba(0, 0, 0, 0.03)" }}
                wrapperClassName="form-control"
                wrapperStyle={{ width: "96.5%", minHeight: "350px" }}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicCheckbox">
              <Form.Label>Slug</Form.Label>
              <Form.Control
                type="text"
                name="slug"
                value={slug}
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

export default FormCms;
