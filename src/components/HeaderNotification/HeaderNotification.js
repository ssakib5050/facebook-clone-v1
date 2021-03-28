import React from "react";
import "./HeaderNotification.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const HeaderNotification = (props) => {
  return (
    <a href="#" className="text-white mr-3 position-relative">
      <span className="badge bg-danger header_notification_badge">
        {props.notification}
      </span>
      <FontAwesomeIcon icon={props.icon} size="lg" />
    </a>
  );
};

export default HeaderNotification;
