import React from "react";
import { BsX } from "react-icons/bs";
import "./SelectedFilter";
const SelectedFilter = () => {
  const arr = [
    "Tree Plantation ",
    "Canada",
    "Toronto",
    "Montreal",
    "Nutrition",
    "Anthropology",
    "Environmental Science",
  ];
  return (
    <>
      {arr.map((item) => (
        <button
          className="btn bg-transparent "
          style={{
            borderColor: "gray",
            borderRadius: "20px",
            fontSize: "8px",
            marginRight: "5px",
            padding: "3px 7px",
          }}
        >
          {item}
          <BsX />
        </button>
      ))}
      <button
        className="btn bg-transparent"
        style={{
          borderColor: "gray",
          borderRadius: "20px",
          fontSize: "8px",
          marginRight: "5px",
          padding: "3px 7px",
        }}
      >
        clear all
      </button>
    </>
  );
};

export default SelectedFilter;
