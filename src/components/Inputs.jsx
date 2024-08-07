import React, { useState } from "react";
import { BiSearch, BiCurrentLocation } from "react-icons/bi";

const Inputs = ({ setQuery, setUnits }) => {
  const [city, setCity] = useState("");

  const handleSearchClick = () => {
    if (city !== "") setQuery({ q: city });
    console.log("search button clicked");
  };

  // Function called when enter is clicked
  const handleFormClick = (e) => {
    if (e.keyCode === 13) {
      e.preventDefault(); // Prevents default form submission behavior, i.e, reload
      handleSearchClick();
    }
  };

  const handleLocationClick = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((position) => {
        const { latitude, longitude } = position.coords;
        setQuery({ lat: latitude, lon: longitude });
        console.log("location button clicked");
      });
    }
  };

  return (
    <div className="flex flex-row justify-center my-6">
      <div
        className="flex flex-row w-2/4 items-center justify-center 
      space-x-4"
      >
        <input
          type="text"
          onChange={(e) => setCity(e.currentTarget.value)}
          placeholder="Search by city..."
          onKeyDown={handleFormClick} // Handle Enter key press
          className="text-gray-500 text-xl font-light p-2 
          w-full shadow-xl capitalize focus:outline-none 
          placeholder:lowercase"
        />

        <BiSearch
          size={30}
          className="cursor-pointer
        transition ease-out hover:scale-125"
          onClick={handleSearchClick}
        />

        <BiCurrentLocation
          size={30}
          className="cursor-pointer
        transition ease-out hover:scale-125"
          onClick={handleLocationClick}
        />
      </div>

      <div className="flex flex-row w-1/4 items-center justify-center">
        <button
          className="text-2xl font-medium transition 
          ease-out hover:scale-125"
          onClick={() => setUnits("metric")}
        >
          °C
        </button>
        <p className="text-2xl font-medium mx-1">|</p>
        <button
          className="text-2xl font-medium transition 
          ease-out hover:scale-125"
          onClick={() => setUnits("imperial")}
        >
          °F
        </button>
      </div>
    </div>
  );
};

export default Inputs;
