import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import sound from "../icons/sound.png";
import "./WordCard.scss";

function WordCard({ word }) {
  function playSound() {
    let sound = new Audio(word.phonetics[0].audio);
    sound.play();
  }

  return (
    <div className="card">
      <h1 className="word">{word.word.toUpperCase()}</h1>
      <div className="phonetic">
        <h3>{word.phonetics[0].text} </h3>
        <button onClick={playSound}>
          <img width="30px" src={sound} />
        </button>
      </div>
      <h2 className="meanings">Meanings</h2>
      {word.meanings.map((meaning) => {
        return (
          <div>
            <h3 className="type">type: {meaning.partOfSpeech}</h3>
            <h2 className="definitions">Definitions</h2>
            {meaning.definitions.map((definition) => {
              return (
                <div className="definition">
                  <h3>Definition: {definition.definition}</h3>
                  {definition.example && <h3>Example: {definition.example}</h3>}
                  {definition.synonyms.length > 0 && <h2>Synonyms</h2>}
                  <div className="synonymsdiv">
                    {definition.synonyms.map((synonym) => {
                      return (
                        <div className="synonyms">
                          <Link to={"/word/" + synonym}>
                            <h3>{synonym}</h3>
                          </Link>
                        </div>
                      );
                    })}
                  </div>
                </div>
              );
            })}
          </div>
        );
      })}
    </div>
  );
}

export default WordCard;
