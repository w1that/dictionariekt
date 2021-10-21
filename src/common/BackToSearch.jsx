import React from "react";
import { Link } from "react-router-dom";
import "./BackToSearch.scss";

function BackToSearch() {
  return (
    <div className="backtosearch">
      <Link to="/">
        <button className="backtosearchbutton">Back to search</button>
      </Link>
    </div>
  );
}

export default BackToSearch;
