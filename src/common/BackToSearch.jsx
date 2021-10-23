import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./BackToSearch.scss";
import back from "../icons/back.png";
import favourite from "../icons/favourite.png";
import { getAuth } from "@firebase/auth";
import { addWordToFavourite, db, getUser } from "../firebase";
import { useHistory, useLocation } from "react-router";
import { collection, query, where, getDocs } from "firebase/firestore";

function BackToSearch({ word }) {
  let history = useHistory()
  const [currentuser, setcurrentuser] = useState({ favourites: [] });
  const [alreadyFav, setalreadyFav] = useState(false);

  const addFavHandler = () => {
    const auth = getAuth();
    const user = auth.currentUser;
    addWordToFavourite(word, user);
    history.push('/dictionary')
  };
  useEffect(() => {
    const fetch = async () => {
      const auth = getAuth();
      const user = auth.currentUser;
      const q = query(collection(db, "users"), where("uid", "==", user.uid));

      const querySnapshot = await getDocs(q);
      querySnapshot.forEach((doc) => {
        setcurrentuser(doc.data());
      });
    };
    fetch();
    console.log(currentuser);
  }, []);
  console.log(currentuser);

  useEffect(() => {
    const checkIfExist = async()=>{
      if (currentuser.favourites.length > 0) {
        console.log("girdi")
        currentuser.favourites.forEach((favWord) => {
          if (favWord == word) {
            setalreadyFav(true);
          }
        });
      }
    }
    checkIfExist()
  }, [currentuser]);
  console.log(alreadyFav);
  return (
    <div className="sideMenu">
      <div className="sideMenuElements">
        <div>
          <Link to="/dictionary">
            <img className="back" src={back} />
          </Link>
        </div>
        <div>
          {alreadyFav ? (
            ""
          ) : (
            <img
              onClick={addFavHandler}
              className="favourite"
              src={favourite}
            />
          )}
        </div>
      </div>
    </div>
  );
}

export default BackToSearch;
