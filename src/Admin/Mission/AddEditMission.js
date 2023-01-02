import { React, useState, useEffect } from "react";
import { Form, Button, Card } from "react-bootstrap";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useNavigate } from "react-router-dom";
import { useParams } from "react-router-dom";
import { AddApi, UpdateApi, editData, UploadImage } from "../Api/Api";
import { addMission } from "../Api/ApiSlice";
import { useDispatch, useSelector } from "react-redux";
import { updateMission } from "../Api/ApiSlice";
import ReactStars from "react-rating-stars-component";
import Dropzone1 from "../../ShareStory/DropZone/DropZone";

const AddEditMission = () => {
  const { id } = useParams();
  const { mission, isLoading } = useSelector((state) => state.apidata);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  var imgarray = [
    "nourish.png",
    "plantation.png",
    "education.png",
    "grow.png",
    "animal.png",
    "csr.png",
  ];
  const [data, setData] = useState({
    title: "",
    type: "",
    sdate: "",
    edate: "",
    ddate: "",
    description: "",
    city: "",
    country: "",
    seats: "",
    oragnization: "",
    org_rating: "",
    target: "",
    progress: "",
  });
  const {
    type,
    sdate,
    title,
    edate,
    ddate,
    description,
    city,
    country,
    seats,
    oragnization,
    progress,
    target,
    org_rating,
  } = data;
  const cites = [
    {
      value: "Toronto",
      label: "Toronto",
    },
    {
      value: "Melbourne",
      label: "Melbourne",
    },
    {
      value: "London",
      label: "London",
    },
    {
      value: "Barcelona",
      label: "Barcelona",
    },
    {
      value: "Berlin",
      label: "Berlin",
    },
    {
      value: "Sydney",
      label: "Sydney",
    },
    {
      value: "New York",
      label: "New York",
    },
    {
      value: "Paris",
      label: "Paris",
    },
    {
      value: "Cape Town",
      label: "Cape Town",
    },
    {
      value: "Hamburg",
      label: "Hamburg",
    },
    {
      value: "Munich",
      label: "Munich",
    },
    {
      value: "Cologne",
      label: "Cologne",
    },
  ];

  const countries = [
    {
      value: "Canada",
      label: "Canada",
    },
    {
      value: "Australia",
      label: "Australia",
    },
    {
      value: "Spain",
      label: "Spain",
    },
    {
      value: "United Kingdom",
      label: "United Kingdom",
    },
    {
      value: "South Africa",
      label: "South Africa",
    },
    {
      value: "France",
      label: "France",
    },
    {
      value: "United States",
      label: "United States",
    },
    {
      value: "Australia",
      label: "Australia",
    },
    {
      value: "Germany",
      label: "Germany",
    },
  ];
  const [rating, setRating] = useState(3);
  const ratingChange = (e) => {
    setRating(e);
  };
  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setData({ ...data, [name]: value });
  };
  const btnCancel = () => {
    navigate("/mission");
  };
  const handleSubmit = () => {
    if (id !== undefined) {
      var data = JSON.stringify([
        {
          title: title,
          type: type,
          sdate: sdate,
          edate: edate,
          ddate: ddate,
          accepted: false,
          _uuid: id,
          description: description,
          city: city,
          country: country,
          oragnization: oragnization,
          rating: rating,
          seatsLeft: seats,
          image: imgarray[Math.floor(Math.random() * imgarray.length)],
          target: target,
          progress: progress,
        },
      ]);
      // UpdateApi(data, callbackafterSubmit, "mission");
      dispatch(updateMission(data)).then(() => {
        callbackafterSubmit();
      });
    } else {
      var data = JSON.stringify([
        {
          title: title,
          type: type,
          sdate: sdate,
          edate: edate,
          ddate: ddate,
          accepted: false,
          description: description,
          city: city,
          country: country,
          seats: seats,
          oragnization: oragnization,
          rating: rating,
          seatsLeft: seats,
          image: imgarray[Math.floor(Math.random() * imgarray.length)],
          target: target,
          progress: progress,
        },
      ]);
      // AddApi(data, callbackafterSubmit, "mission");
      dispatch(addMission(data)).then(() => {
        callbackafterSubmit();
      });
    }
  };
  const callbackafterSubmit = () => {
    toast("Your data is submited", {
      onClose: () => navigate("/mission"),
      autoClose: 2000,
    });
  };
  useEffect(() => {
    console.log("param", id);
    if (id !== undefined) {
      // editData(id, callbackafterFetch, "mission");
      callbackafterFetch(mission.find((x) => x._uuid === id));
    }
  }, []);
  const callbackafterFetch = async (editData) => {
    setData({
      title: editData.title,
      type: editData.type,
      sdate: editData.sdate,
      edate: editData.edate,
      ddate: editData.ddate,

      // accepted: false,
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
              <Form.Label>Mission Title</Form.Label>
              <Form.Control
                type="text"
                value={title}
                name="title"
                onChange={handleChange}
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Mission Type</Form.Label>
              <Form.Control
                type="text"
                value={type}
                name="type"
                onChange={handleChange}
              />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Start Date</Form.Label>
              <Form.Control
                type="date"
                value={sdate}
                name="sdate"
                onChange={handleChange}
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>End Date</Form.Label>
              <Form.Control
                type="date"
                value={edate}
                name="edate"
                onChange={handleChange}
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Registration Deadline</Form.Label>
              <Form.Control
                type="date"
                value={ddate}
                name="ddate"
                onChange={handleChange}
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Description</Form.Label>
              <Form.Control
                as="textarea"
                value={description}
                name="description"
                onChange={handleChange}
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>City</Form.Label>
              <Form.Select value={city} name="city" onChange={handleChange}>
                {cites.map((city) => {
                  return (
                    <option value={city.value} label={city.label}>
                      Active
                    </option>
                  );
                })}
              </Form.Select>
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Country</Form.Label>
              <Form.Select
                value={country}
                name="country"
                onChange={handleChange}
              >
                {countries.map((country) => {
                  return (
                    <option value={country.value} label={country.label}>
                      Active
                    </option>
                  );
                })}
              </Form.Select>
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Seats</Form.Label>
              <Form.Control
                type="number"
                value={seats}
                name="seats"
                onChange={handleChange}
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Oragnization</Form.Label>
              <Form.Control
                type="text"
                value={oragnization}
                name="oragnization"
                onChange={handleChange}
              />

              <ReactStars
                count={5}
                initialRating={rating}
                onChange={ratingChange}
                name="rating"
                size={20}
                edit={true}
                isHalf={true}
                emptyIcon={<i className="far fa-star"></i>}
                halfIcon={<i className="fa fa-star-half-alt"></i>}
                fullIcon={<i className="fa fa-star"></i>}
                activeColor="orange"
              />
            </Form.Group>
            <Dropzone1 />
            <Form.Group className="mb-3">
              <Form.Label>Target</Form.Label>
              <Form.Control
                type="text"
                value={target}
                name="target"
                onChange={handleChange}
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Progress</Form.Label>
              <Form.Control
                type="number"
                value={progress}
                name="progress"
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

export default AddEditMission;
