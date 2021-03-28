import React from "react";
import "./RightContentItem.css";

const RightContentItem = (props) => {
  return (
    <div>
      <div className="d-flex align-items-center">
        <img
          src="https://via.placeholder.com/150/"
          alt=""
          className="rightcontentitem_img"
        />
        {props.title}
      </div>
      <div className="d-flex mt-1 mb-2">
        <button className="btn btn-primary w-100 m-1 btn-sm">
          {props.btn1}
        </button>
        <button className="btn btn-danger w-100 m-1 btn-sm">
          {" "}
          {props.btn2}
        </button>
      </div>
    </div>
  );
};

export default RightContentItem;
