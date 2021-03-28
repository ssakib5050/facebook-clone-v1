import React from "react";
import "./LeftContentIcon.css";

const LeftContentIcon = (props) => {
  return (
    <div
      className={`d-flex align-items-center mb-1 leftcontenticon_main ${props.className}`}
    >
      <img src={props.image} alt="" className="leftcontenticon_img mr-2" />
      {props.title}
    </div>
  );
};

export default LeftContentIcon;
