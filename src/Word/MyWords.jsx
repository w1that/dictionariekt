import { getAuth } from "@firebase/auth";
import { nanoid } from "nanoid";
import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import { auth, getFavoriteWords } from "../firebase";
import './MyWords.scss'

function MyWords() {
  let history = useHistory()
  const [words, setwords] = useState([]);
  async function getWords(){
    const auth = await getAuth()
    getFavoriteWords(auth.currentUser.uid).then(response=>setwords(response.favourites))
  }

  return (
    <div>
      
      
      <div className="favouriteWords">
      <div className="buttons">
      
        <button onClick={()=>history.push("/dictionary")}>Back</button>
      <button onClick={()=>getWords()}>Load Archive</button>
      </div>
      <div >
      
      <div className="wordsList">
      {words.map((word) => {
        return <div onClick={()=>history.push(`/dictionary/${word}`)} className="favouriteWord"><h1 key={nanoid()}>{word}</h1></div>
      })}
      </div>
      </div>
      </div>
      
    </div>
  );
}

export default MyWords;
