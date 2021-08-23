import React from "react";
import Nav from "./Nav/Nav";
import {HeaderStyle} from "./HeaderStyle"

function Header() {
  return (
    <HeaderStyle>
      <Nav />
      <div className = "header-box">
        <div className = "header-insides">
          <h1 className = "header-first-header">Astronomy Photo of The Day</h1>
          <blockquote className = "header-quote">"The day we stop exploring is the day we commit ourselves to live in a stagnant world, devoid of curiosity, empty of dreams." - Neil DeGrasse Tyson.</blockquote>
        </div>
      </div>
    </HeaderStyle>
  );
}
export default Header;


