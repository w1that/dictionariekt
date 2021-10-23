import React from "react";
import { logout } from "../firebase";
import "./NaviBar.scss";
import bookworm from '../icons/bookworm.png'

function Avatar({ user }) {
  return (
    <div className="dropdown">
      <button className="dropbtn">{user.displayName}</button>
      
      <div className="dropdown-content">
        <a href="/mywords">My Words</a>
        <a onClick={()=>logout()} href="/">Log Out</a>
      </div>
    </div>
  );
}

export default Avatar;
