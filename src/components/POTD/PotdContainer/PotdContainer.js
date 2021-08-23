import React from "react";
import {PotdContainerStyle} from "./PotdContainerStyle"
import Nav from "../../Header/Nav/Nav"

function PotdContainer({ title, date, explanation, copyright, imgUrl }) {
  return (
    <PotdContainerStyle>
      <h2 className = "POTD-second-header">{title}</h2>
      <h3 className = "POTD-third-header">{date}</h3>
      <div className="photo-box">
        <img className = "POTD-img" src={imgUrl} alt="space" />
      </div>
      <p classsName = "POTD-paragraph">{explanation}</p>
      <p className = "POTD-paragraph">{copyright}</p>
    </PotdContainerStyle>
  );
}
export default PotdContainer;
