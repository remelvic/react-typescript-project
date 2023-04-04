import React from "react";
import { FC } from "react";

interface CityTableProps {
  cities: string[];
}

export const CityTable: FC<CityTableProps> = ({ cities }) => {
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
        {cities.map((loc, idx) => (
          <tr key={idx}>
            <td>{loc}</td>
          </tr>
        ))}
      </tbody>
    </table>
  </div>
    )
}
