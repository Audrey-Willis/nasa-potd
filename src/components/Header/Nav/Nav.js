import React from "react";
import { Link } from "react-router-dom";
import {NavStyle} from "./NavStyle";

function Nav() {
  return (
    <NavStyle>
      <div className = "inner-nav">
      <Link to="/Photo-Of-The-Day" className="navLinks">Photo of the Day</Link>
      <Link to="/nasa-potd" className="navLinks">Home</Link>
      </div>
    </NavStyle>
  );
}

export default Nav;
