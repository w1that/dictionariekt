import React from "react";
import { Link } from "react-router-dom";
import "./BackToSearch.scss";
import back from "../icons/back.png";
import favourite from "../icons/favourite.png";
function BackToSearch() {
  return (
    <div className="sideMenu">
      <div className="sideMenuElements">
        <div>
          <Link  to="/dictionary"><img className="back" src={back} /></Link>
        </div>
        <div>
          <img className="favourite" src={favourite} />
        </div>
      </div>
    </div>
  );
}

export default BackToSearch;
