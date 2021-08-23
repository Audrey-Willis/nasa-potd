import React, { useState, useEffect } from "react";
import axios from "axios";
import PotdContainer from "../PotdContainer/PotdContainer";
import {PotdDataStyle} from "./PotdDataStyle";
import Nav from "../../Header/Nav/Nav"

function PotdData() {
  const [image, setImage] = useState("");
  const [date, setDate] = useState("");

  //set my initial state using a useEffect hook, and axios to pull the api
  useEffect(() => {
    let isActive = true;
    axios
      .get(
        `https://api.nasa.gov/planetary/apod?api_key=rgQsir8BIxc8vorMi1R81BNSadWvFRNvetq1MmsO&date=${date}`)
      .then((response) => {
        if (isActive) {
          setImage(response.data);
        }
      })
      .catch(
        (error) => {
          console.log(error);
        },
        [date]
      );
  });

  const eventHandler = (event) => {
    event.preventDefault();
    setDate(event.target.value);
  };
  //set a simple eventHandler that allows the user to change the date
  //set up a calender input in the return that calls the event handler
  //plugged the POTDContainer into the return, along with its props

  return (
    <PotdDataStyle>
      <div className = "POTD-data">
        <Nav/>
      <div className="datePicker">
        <p data-testid="photoText">Pick another date to see its photo!</p>
        <input
          type="date"
          onChange={eventHandler}
          placeholder="yyyy-mm-dd"
          min="1995-06-16"
          required
        ></input>
      </div>
      <PotdContainer
        key={image.id}
        title={image.title}
        date={image.date}
        explanation={image.explanation}
        copyright={image.copyright}
        imgUrl={image.url}
      />
      </div>
    </PotdDataStyle>
  );
}
export default PotdData;
