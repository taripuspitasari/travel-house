import React, {useContext} from "react";
// import context
import {HouseContext} from "./HouseContext";
// import house
import House from "./House";
// import Link
import {Link} from "react-router-dom";
// import icons
import {ImSpinner2} from "react-icons/im";
import {TfiFaceSad} from "react-icons/tfi";

const HouseList = () => {
  const {houses, loading} = useContext(HouseContext);
  // if loading is true
  if (loading) {
    return (
      <ImSpinner2 className="mx-auto animate-spin text-orange-600 text-4xl mt-[300px] lg:mt-[200px]" />
    );
  }

  if (houses.length < 1) {
    return (
      <div className="mt-[300px] justify-center mx-auto text-3xl text-gray-400 lg:mt-48 flex flex-row gap-x-2">
        <span>Sorry, nothing found</span>
        <span>
          <TfiFaceSad />
        </span>
      </div>
    );
  }

  return (
    <section className="mb-20 mt-72 lg:mt-1">
      <div className="container mx-auto">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-14">
          {houses.map((house, index) => {
            return (
              <Link to={`/property/${house.id}`} key={index}>
                <House house={house} />
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default HouseList;
