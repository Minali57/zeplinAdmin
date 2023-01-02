import React from "react";
import SingleCard from "./Card/Card";
import { StoriData } from "./StoriData";
import Row from "react-bootstrap/Row";
import ImageSection from "./ImageSection/ImageSection";
const StoriesListing = () => {
  return (
    <>
      <ImageSection />
      <div style={{ padding: "35px 135px" }}>
        <Row xs={1} md={2} lg={3}>
          {StoriData.map((data) => {
            return <SingleCard data={data} />;
          })}
        </Row>
      </div>
    </>
  );
};

export default StoriesListing;
