import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";
const PassModal = () => {
  const [show, setShow] = useState(false);
  const [pass, setPass] = useState({
    oldP: "",
    newp: "",
    confirmp: "",
  });
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setPass({...pass,[name]:value});
    
  };
  return (
    <>

      <Modal show={show} onHide={handleClose} animation={false}>
        <Modal.Header closeButton>
          <Modal.Title>Change Password</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Control
              type="text"
              value={pass.oldP}
              onChange={handleChange}
              name="oldP"
              placeholder="Enter old password"
              aria-describedby="basic-addon1"
            />
            <br />
            <Form.Control
              type="text"
              value={pass.newp}
              onChange={handleChange}
              name="newp"
              placeholder="Enter new password"
              aria-describedby="basic-addon1"
            />
            <br />
            <Form.Control
              type="text"
              value={pass.confirmp}
              onChange={handleChange}
              name="confirmp"
              placeholder="Enter confirm password"
              aria-describedby="basic-addon1"
            />
            <br />
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Cancel
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Change Password
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};
export default PassModal;
