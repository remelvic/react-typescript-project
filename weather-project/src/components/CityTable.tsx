import React from "react";
import { FC } from "react";
import { WeatherLocation } from "../model/Weather";

interface CityTableProps {
  cities: WeatherLocation[];
  current: WeatherLocation | null;
  onSelect: (location: WeatherLocation) => void;
}

export const CityTable: FC<CityTableProps> = ({ cities, onSelect, current }) => {
    return (
  <div>
    <h2>Locations</h2>
    <table className="table table-hover">
      <thead>
        <tr>
          <th>Name</th>
        </tr>
      </thead>
      <tbody>
        {cities.map((location) => (
          <tr className={current?.id === location?.id ? 'table-primary' : ""} onClick={() => onSelect(location)}>
            <td>{location.name}</td>
          </tr>
        ))}
      </tbody>
    </table>
  </div>
    )
}
