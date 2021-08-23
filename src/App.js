import React from "react";
import {BrowserRouter as Router, Route, BrowserRouter} from "react-router-dom";
import Home from "./components/Home/Home";
import PotdData from "./components/POTD/PotdData/PotdData";

function App() {
  return (
    <BrowserRouter>
      <Route exact path="/nasa-potd" component={Home} />
      <Route path="/Photo-Of-The-Day" component={PotdData} />
    </BrowserRouter>
  );
}

export default App;
