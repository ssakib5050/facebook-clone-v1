import React from "react";
import "./LeftContent.css";

import LeftContentIcon from "../LeftContentIcon/LeftContentIcon";

const LeftContent = () => {
  return (
    <div className="leftcontent_main">
      <div>
        <LeftContentIcon
          title="Rajib"
          image="https://via.placeholder.com/150/"
          className="active"
        />
        <LeftContentIcon
          title="News Feed"
          image="icons/leftContent/newsfeed.png"
        />
        <LeftContentIcon
          title="Messenger"
          image="icons/leftContent/messenger.png"
        />
        <LeftContentIcon title="Watch" image="icons/leftContent/play.png" />
      </div>

      <div>
        <h4 className="mt-4">Shourcuts</h4>
        <LeftContentIcon title="Group 1" image="icons/leftContent/groups.png" />
        <LeftContentIcon title="Group 2" image="icons/leftContent/groups.png" />
        <LeftContentIcon title="Group 3" image="icons/leftContent/groups.png" />
      </div>

      <div>
        <h4 className="mt-4">Explore</h4>
        <LeftContentIcon title="COVID-19" image="icons/leftContent/covid.png" />
        <LeftContentIcon title="Pages" image="icons/leftContent/pages.png" />
        <LeftContentIcon title="Saved" image="icons/leftContent/saved.png" />
        <LeftContentIcon title="Groups" image="icons/leftContent/groups.png" />
        <LeftContentIcon
          title="Friend List"
          image="icons/leftContent/friendlist.png"
        />

        <LeftContentIcon
          title="Memories"
          image="icons/leftContent/memories.png"
        />
        <LeftContentIcon title="Games" image="icons/leftContent/games.png" />
        <LeftContentIcon
          title="Weather"
          image="icons/leftContent/weather.png"
        />
        <LeftContentIcon title="Live" image="icons/leftContent/live.png" />
        <LeftContentIcon
          title="Recent Ad Activity"
          image="icons/leftContent/activity.png"
        />
        <LeftContentIcon title="Offers" image="icons/leftContent/offers.png" />
        <LeftContentIcon
          title="Crisis Response"
          image="icons/leftContent/crisis-response.png"
        />
        <LeftContentIcon
          title="Manage Apps"
          image="icons/leftContent/manage-apps.png"
        />
      </div>
    </div>
  );
};

export default LeftContent;
