import axios from "axios";
import { nanoid } from "nanoid";
import React, { useEffect, useState } from "react";
import { useHistory, useParams } from "react-router";
import { Link } from "react-router-dom";
import BackToSearch from "../common/BackToSearch";
import LogoText from "../common/LogoText";
import WordCard from "./WordCard";

function Word() {
  const { word } = useParams();
  let history = useHistory();
  const [loading, setloading] = useState(true);
  const [data, setdata] = useState([]);
  const [err, setErr] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      axios
        .get(process.env.REACT_APP_DICTIONARY_BASE_URL + word)
        .then((response) => {
          setdata(response.data);
          setloading(false);
        })
        .catch((err) => {
          setErr(true);
          setloading(false);
        });
    };
    fetchData();
  }, []);

  if (loading) {
    return <h1>loading</h1>;
  }

  if (err) {
    history.push("/");
    alert(
      "There is no such words in dictionary: " + "'" + word.toUpperCase() + "'"
    );
    setErr(false);
  }

  return (
    <div>
      <BackToSearch />
      {data.map((word) => {
        return (
          <div className="cardcontainer" key={nanoid()}>
            <WordCard word={word} />
          </div>
        );
      })}
    </div>
  );
}

export default Word;
