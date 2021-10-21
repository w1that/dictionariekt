import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./SearchField.scss";

function SearchField() {
  const [inputText, setinputText] = useState("dictionary");
  const getInputTextHandler = (e) => {
    console.log("çalıştı");
    setinputText(e.target.value);
  };

  return (
    <div className="searchField">
      <h4>What's the meaning of </h4>
      <input
        value={inputText}
        onChange={getInputTextHandler}
        type="text"
      ></input>
      <div className="buttonsdiv">
        <Link to={"/word/" + inputText}>
          <button>?</button>
        </Link>
      </div>
    </div>
  );
}

export default SearchField;
