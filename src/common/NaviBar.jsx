import { getAuth } from "@firebase/auth";
import React, { useEffect, useState } from "react";
import { useHistory } from "react-router";
import Avatar from "./Avatar";
import LogoText from "./LogoText";
import "./NaviBar.scss";

function NaviBar() {
  
  let history= useHistory()
  const [user, setuser] = useState({})
  useEffect(() => {
    const auth = getAuth()
    const user = auth.currentUser
    setuser(user)
    if(!user){
      alert("login first")
      history.push("/")
    }
  }, [])
  return (
    <div className="navibar">
      <LogoText />
      <Avatar user={user}/>
    </div>
  );
}

export default NaviBar;
