import React, { useState } from "react";
import "./App.css";
import ListCity from "./components/ListCity";
// import {CitySearch} from "./components/CitySearch";

function App() {
  // for input
  const [locationSearch, setLocationSearch] = useState("");

  const [location, setLocation] = useState<string[]>([]) //as string[];
  const disabledSearch = locationSearch.trim() === '';
  const addLocationToList = () => {
    setLocation([locationSearch, ...location])
  }

  //TODO: add click enter button
  return (
    <div className="container">
      <h1>My Weather App</h1>
      <div>
        <label>
          Add Location{" "}
          <input className="ml-1 mr-1"
            type="text"
            value={locationSearch}
            onChange={(e) => setLocationSearch(e.target.value)}
          />
        </label>
        <button className="btn btn-primary" onClick={addLocationToList} disabled={disabledSearch}>Search </button>
      </div>

      <div>
        <h2>Locations</h2>
        <table className="table table-hover">
          <thead>
            <tr>
              <th>Name</th>
            </tr>
          </thead>
          <tbody>
            {location.map((loc, idx) => (
              <tr key={idx}>
                <td>{loc}</td>
              </tr>
            ))}
          </tbody>
        </table>
        {/* <ListCity /> */}
      </div>
    </div>
  );
}

export default App;
