import "react-image-gallery/styles/css/image-gallery.css";
import React from "react";
import csr2 from "./CSR2.png";
import { Image } from "../Images/Image";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import ImageGallery from "react-image-gallery";
const ImageSection = () => {
  return (
    <>
      {/* <div style={{ disply: "flex", flexDirection: "column", width: "90%" }}>
        <div>
          <img src={csr2} alt="csr" style={{ width: "100%" }} />
        </div>
        <div>
          <Row>
            {Image.map((imge) => {
              return (
                <>
                  <Col xs={2}>
                    <img
                      src={`${process.env.PUBLIC_URL}/assets/${imge}`}
                      style={{ width: "100%" }}
                      alt="dd"
                    />
                  </Col>
                </>
              );
            })}
          </Row>
        </div>
      </div> */}

      <ImageGallery
        items={Image}
        showPlayButton={false}
        showFullscreenButton={false}
        showNav={false}
        infinite={false}
      />
    </>
  );
};

export default ImageSection;
