import React from "react";
import "./RightContent.css";

import RightContentItem from "../RightContentItem/RightContentItem";

const RightContent = () => {
  return (
    <div>
      <div className="bg-white rightContent_border p-1 mb-3">
        <h5>Friend Request</h5>

        <RightContentItem title="Random Person 1" btn1="Accept" btn2="Reject" />
        <RightContentItem title="Random Person 2" btn1="Accept" btn2="Reject" />
        <RightContentItem title="Random Person 3" btn1="Accept" btn2="Reject" />
      </div>

      <div className="bg-white rightContent_border p-1  mb-3">
        <h5>People you may know</h5>

        <RightContentItem
          title="Random Person 1"
          btn1="Add Friend"
          btn2="Remove"
        />
        <RightContentItem
          title="Random Person 2"
          btn1="Add Friend"
          btn2="Remove"
        />
        <RightContentItem
          title="Random Person 3"
          btn1="Add Friend"
          btn2="Remove"
        />
      </div>

      <div className="bg-white rightContent_border p-1  mb-3">
        <button className="rightContent_language_btn active">
          English (US)
        </button>
        <button className="rightContent_language_btn">English (UK)</button>
        <button className="rightContent_language_btn">বাংলা</button>
        <button className="rightContent_language_btn">Español</button>
        <button className="rightContent_language_btn">আসমীয়া</button>
      </div>

      <div>
        <button className="rightContent_more_btn">Privacy</button>
        <button className="rightContent_more_btn">Terms</button>
        <button className="rightContent_more_btn">Advertising</button>
        <button className="rightContent_more_btn">AdChoice</button>
        <button className="rightContent_more_btn">Cookies</button>
        <button className="rightContent_more_btn">More</button>
      </div>

      <p className="font-weight-bold p-2 pt-3">Facebook © 2021</p>
    </div>
  );
};

export default RightContent;
