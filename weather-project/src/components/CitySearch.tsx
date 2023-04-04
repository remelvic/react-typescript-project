import React from "react";
import { FC, useState } from "react";

interface CitySearchProps {
    onSearch: (search: string) => void
}

export const CitySearch: FC<CitySearchProps> = (props) => {

  const [locationSearch, setLocationSearch] = useState('');
  const disabledSearch = locationSearch.trim() === '';

  const addLocationToList = () => {
    props.onSearch(locationSearch);
    setLocationSearch('');
  }

  return (
    <div>
      <label>
        Add Locations
        <input
          className="ml-1 mr-1"
          type="text"
          value={locationSearch}
          onChange={(e) => setLocationSearch(e.target.value)}
        />
      </label>
      <button
        className="btn btn-primary"
        onClick={addLocationToList}
        disabled={disabledSearch}
      >
        Search{" "}
      </button>
    </div>
  );
};
