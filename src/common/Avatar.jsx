import React from "react";
import { logout } from "../firebase";
import "./NaviBar.scss";
import bookworm from '../icons/bookworm.png'

function Avatar({ user }) {
  return (
    <div class="dropdown">
      <button class="dropbtn">{user.displayName}</button>
      
      <div class="dropdown-content">
        <a href="#">My Words</a>
        <a onClick={()=>logout()} href="/">Log Out</a>
      </div>
    </div>
  );
}

export default Avatar;
