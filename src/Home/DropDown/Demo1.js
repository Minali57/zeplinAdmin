import React, { useState } from "react";
import Select from "react-select";
const Demo1 = () => {
  const[selectedValue,setSelectedValue]=useState()
  var CountryName = [
    {
      value: "india",
      label: "india",
    },
    {
      value: "jndia",
      label: "jndia",
    },
   
  ];
  const handleChange=(e)=>{
setSelectedValue(Array.isArray(e) ? e.map((x) => x.value) : []);
  }
  return (
    <div>
      <Select
        options={CountryName}
        isMulti={true}
        onChange={handleChange}
      ></Select>
      {selectedValue && (
        <div style={{ marginTop: 20, lineHeight: "25px" }}>
          <div>
            <b>Selected Value: </b> {JSON.stringify(selectedValue, null, 2)}
          </div>
        </div>
      )}
    </div>
  );
};

export default Demo1;
