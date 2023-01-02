import { useState } from "react";
import Dropzone1 from "./DropZone/DropZone";
import { Col, Row } from "react-bootstrap";
import Form from "react-bootstrap/Form";
import { Editor } from "react-draft-wysiwyg";
import Button from "react-bootstrap/Button";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import { EditorState } from "draft-js";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./ShareStory.css";
const ShareStory = () => {
  const [type, setType] = useState("");
  const [title, setTitle] = useState("");
  const [date, setDate] = useState("");
  const [url, setUrl] = useState("");

  const [editorState, setEditorState] = useState(() =>
    EditorState.createEmpty()
  );
  const handleSubmit = () => {
    toast("Your story is submited");
    console.log("submit");
  };
  const handleSave = () => {
    console.log("data", type, title, date, url);
  };
  return (
    <>
      <ToastContainer position="top-center" />
      <hr />
      <div
        style={{
          margin: "0% 12%",
        }}
      >
        <div
          style={{
            fontSize: "36px",
            color: "#414141",
          }}
        >
          Share your story
        </div>
        <Row style={{ paddingTop: "14px" }}>
          <Col>
            <Form.Label>Select Mission</Form.Label>
            <Form.Select value={type} onChange={(e) => setType(e.target.value)}>
              <option value="DICTUM">Dictamen</option>
              <option value="CONSTANCY">Constancia</option>
              <option value="COMPLEMENT">Complemento</option>
            </Form.Select>
          </Col>
          <Col>
            <Form.Label> My Story Title</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter story title"
              value={title}
              onChange={(e) => {
                setTitle(e.target.value);
              }}
            />
          </Col>
          <Col>
            <Form.Label>Date</Form.Label>
            <Form.Control
              type="Date"
              placeholder="Select date"
              value={date}
              onChange={(e) => setDate(e.target.value)}
            />
          </Col>
        </Row>
        <Row style={{ paddingTop: "12px" }}>
          <Col>
            My Story
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
              editorStyle={{ border: "1px solid" }}
            />
          </Col>
        </Row>
        <Row style={{ paddingTop: "14px" }}>
          <Col>
            <Form.Label> Enter Video URL</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter your url"
              value={url}
              onChange={(e) => setUrl(e.target.value)}
            />
          </Col>
        </Row>
        <Row style={{ paddingTop: "14px" }}>
          <Col>
            <Form.Label>Upload your Photos</Form.Label>
            <Dropzone1 />
          </Col>
        </Row>

        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <div>
            <Button
              className="btn btn-primary btn-sm"
              style={{
                backgroundColor: "white",
                color: "#414141",
                border: "1.5px solid #414141",
                borderRadius: "22px",
                display: "flex",
                alignItems: "center",
                margin: "auto",
                width: "85px",
              }}
            >
              Cancel
            </Button>
          </div>
          <div style={{ display: "flex", justifyContent: "flex-end" }}>
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
                width: "85px",
                margin: "12px",
              }}
              onClick={handleSave}
            >
              Save
            </Button>
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
                width: "85px",
              }}
              onClick={handleSubmit}
            >
              Submit
            </Button>
          </div>
        </div>
      </div>
    </>
  );
};

export default ShareStory;
