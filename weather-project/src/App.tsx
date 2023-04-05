import React, { FC, useState } from "react";
import "./App.css";
import { CitySearch } from "./components/CitySearch";
import { CityTable } from "./components/CityTable";
import { WeatherLocation } from "./model/Weather";
import { searchLocation } from "./services/WeatherService"
import {ErrorAlert, WarningAlert} from "./components/Alerts";
import { WeatherSummary } from "./components/WeatherSummary";


const App: FC = () => {
  const [currentLocation, setCurrentLocation] = useState<WeatherLocation | null>(null);
  const [locations, setLocation] = useState<WeatherLocation[]>([]);
  // const addLocationToList = (loc: string) => {
  //   setLocation([loc, ...location])
  // }
  const [error, setError] = useState('');
  const [warning, setWarning] = useState('');

  const resetAlerts = () => {
    setError('');
    setWarning('');
  }

  let addLocation = async (term: string) => {
    resetAlerts();
    const location = await searchLocation(term);
    console.log(location);
    if (!location){
      setError(`No location found called '${term}'`);
    }else if (locations.find(item => item.id === location.id)){
      setWarning(`Location ${term} is already in the list.`);
    }else {
      setLocation([location, ...locations]);
    }
  };

  //TODO: add click enter button
  //TODO: add validate input
  return (
    <div className="container">
      <h1>My Weather App</h1>
      <CitySearch onSearch={addLocation} />
      <ErrorAlert message={error}/>
      <WarningAlert message={warning}/>
      <CityTable cities={locations} current={currentLocation} onSelect={location => setCurrentLocation(location)} />
      <WeatherSummary location={currentLocation}/>
    </div>
  );
}

export default App;
