import React, { CSSProperties, useState } from "react";
import ClipLoader from "react-spinners/ClipLoader";
const override: CSSProperties = {
  display: "block",
  margin: "10% auto",
  borderColor: "#55AAFF",
};
const Loader = ({ loading, children }) => {
  return (
    <div>
      {loading && (
        <ClipLoader
          loading={loading}
          cssOverride={override}
          size={40}
          aria-label="Loading Spinner"
          // data-testid="loader"
        />
      )}
      {!loading && children}
    </div>
  );
};

export default Loader;
