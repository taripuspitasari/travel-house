import React, {useContext} from "react";

// import components
import CountryDropdown from "./CountryDropdown";
import PropertyDropdown from "./PropertyDropdown";
import PriceRangeDropdown from "./PriceRangeDropdown";

// import context
import {HouseContext} from "./HouseContext";

const Search = () => {
  const {handleClick} = useContext(HouseContext);
  return (
    <div className="px-[30px] py-6 max-w-[1170px]  mx-auto flex flex-col lg:flex-row lg:gap-x-3 justify-between bg-white relative lg:-top-20 lg:shadow-xl rounded-md">
      <CountryDropdown />
      <PropertyDropdown />
      <PriceRangeDropdown />
      <button
        onClick={() => handleClick()}
        className="bg-orange-600 hover:bg-orange-700 transition text-white w-full lg:max-w-[162px] h-12 rounded-2xl text-md items-center justify-center"
      >
        Search
      </button>
    </div>
  );
};

export default Search;
