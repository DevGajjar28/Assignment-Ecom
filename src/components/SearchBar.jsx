import React, { useState } from "react";
import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";

/*
    -> searching and providing user search
    -> why use ? make easy , user friendly, time saving
    -> fetching data from Product component 
    
*/



function SearchBar({ onSearch }) {
  const [query, setQuery] = useState("");

  const handleChange = (e) => {
    const value = e.target.value;
    setQuery(value);
    // Call the search handler function with the search query
    onSearch(value);
  };

  return (
    <>
      <div className="flex lg:flex-1 lg:items-center lg:justify-center mb-6">
        <div className="flex items-center w-full max-w-md mx-auto bg-gray-100 rounded-md">
          <input
            type="text"
            placeholder="Search..."
            value={query}
            onChange={handleChange}
            className="flex-1 appearance-none bg-transparent border-none w-full text-gray-700 py-2 px-4 leading-tight focus:outline-none"
          />
          <MagnifyingGlassIcon
            className="h-6 w-6 text-gray-400 mr-4"
            aria-hidden="true"
          />
        </div>
      </div>
    </>
  );
}

export default SearchBar;
