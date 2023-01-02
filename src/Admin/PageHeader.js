import React from "react";
import { Outlet } from "react-router-dom";
const PageHeader = ({ title }) => {
  return (
    <div style={{ paddingLeft: "19%", marginRight: "10%" }}>
      <div
        style={{
          padding: "8px 0",
          paddingRight: "5%",
          width: "fit-content",
          borderBottom: "1px solid",
        }}
      >
        <h5>{title}</h5>
        {/* <CmsCommon cms="CMS"/> */}
      </div>

      <hr style={{ position: "relative", bottom: "16px" }} />
      <Outlet />
    </div>
  );
};

export default PageHeader;
