import React from "react";
// import icons
import {BiBed, BiBath, BiArea} from "react-icons/bi";
// import link
import {Link} from "react-router-dom";

const House = ({house}) => {
  const {image, type, country, address, bedrooms, bathrooms, surface, price} =
    house;

  return (
    <div className="bg-white shadow-1 p-5 rounded-lg rounded-tl-[90px] w-full max-w-[352px] mx-auto cursor-pointer hover:shadow-2xl transition">
      <img src={image} className="mb-8" />
      <div className="flex gap-x-2 text-sm mb-4">
        <div className="bg-orange-100 rounded-full text-orange-600 px-3">
          {type}
        </div>
        <div className="bg-orange-600 rounded-full px-3 text-white">
          {country}
        </div>
      </div>

      <div className="font-semibold max-w-[256px] text-lg">{address}</div>
      <div className="flex gap-x-4 my-4 ">
        <div className="flex gap-x-1 items-center text-gray-600">
          <div>
            <BiBed />
          </div>
          <div>{bedrooms}</div>
        </div>
        <div className="flex gap-x-1 items-center text-gray-600">
          <div>
            <BiBath />
          </div>
          <div>{bathrooms}</div>
        </div>
        <div className="flex gap-x-1 items-center text-gray-600">
          <div>
            <BiArea />
          </div>
          <div>{surface}</div>
        </div>
      </div>
      <div className="text-lg font-semibold text-orange-700">$ {price}</div>
    </div>
  );
};

export default House;
