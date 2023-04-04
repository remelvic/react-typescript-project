import React, { useState } from "react";
import "./App.css";
import ListCity from "./components/ListCity";
import { CitySearch } from "./components/CitySearch";
import { CityTable } from "./components/CityTable";

function App() {

  const [location, setLocation] = useState<string[]>([])
  const addLocationToList = (loc: string) => {
    setLocation([loc, ...location])
  }

  //TODO: add click enter button
  //TODO: add validate input
  return (
    <div className="container">
      <h1>My Weather App</h1>
      <CitySearch onSearch={addLocationToList}/>
      <CityTable cities={location}/>
    </div>
  );
}

export default App;
