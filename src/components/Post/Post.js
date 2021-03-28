import React from "react";
import "./Post.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { DropdownButton, Dropdown } from "react-bootstrap";

const Post = () => {
  return (
    <div className="custom-dark-border bg-white p-2 mb-2">
      <div>
        <div className="d-flex align-items-center">
          <img
            src="https://via.placeholder.com/150/"
            alt=""
            className="post_main_img mr-2"
          />
          <div className="flex-grow-1">
            <p className="mb-0 font-weight-bold">Rajib Khan</p>
            <p className="mb-0">3 min</p>
          </div>

          <div>
            <DropdownButton
              menuAlign="right"
              title={<FontAwesomeIcon icon="ellipsis-v" />}
              id="post_main_more"
              variant="light"
            >
              <Dropdown.Item eventKey="1">Action 1</Dropdown.Item>
              <Dropdown.Item eventKey="1">Action 2</Dropdown.Item>
              <Dropdown.Item eventKey="1">Action 3</Dropdown.Item>
              <Dropdown.Item eventKey="1">Action 4</Dropdown.Item>
              <Dropdown.Item eventKey="1">Action 5</Dropdown.Item>
              <Dropdown.Divider />
              <Dropdown.Item eventKey="4">Report</Dropdown.Item>
            </DropdownButton>

            {/* <button className="btn">
              <FontAwesomeIcon icon="ellipsis-v" />
            </button> */}
          </div>
        </div>
        <p className="mt-3 mb-0">Hello World</p>
        <img
          src="https://via.placeholder.com/720x480"
          alt=""
          className="img-fluid"
        />
        <hr />
        <div className="d-flex justify-content-between">
          <button>1</button>
          <button>2</button>
        </div>
      </div>
    </div>
  );
};

export default Post;
