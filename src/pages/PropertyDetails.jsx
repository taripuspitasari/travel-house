import React from "react";
// import data
import {housesData} from "../data";
// import icons
import {BiBed, BiBath, BiArea} from "react-icons/bi";
// import useParams
import {useParams} from "react-router-dom";
// import Link
import {Link} from "react-router-dom";

const PropertyDetails = () => {
  const {id} = useParams();
  const house = housesData.find(house => {
    return house.id === parseInt(id);
  });
  return (
    <section>
      <div className="container mx-auto min-h-[800px] mb-14">
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between">
          <div>
            <h2 className="text-2xl font-semibold">{house.name}</h2>
            <h3 className="text-lg mb-4">{house.address}</h3>
          </div>
          <div className="flex gap-x-2 mb-4 text-sm lg:mb-0">
            <div className="bg-orange-100 rounded-full text-orange-600 px-3">
              {house.type}
            </div>
            <div className="bg-orange-600 rounded-full px-3 text-white">
              {house.country}
            </div>
          </div>
          <div className="text-lg font-semibold text-orange-600">
            $ {house.price}
          </div>
        </div>
        <div className="flex flex-col items-start gap-8 lg:flex-row">
          <div className="max-w-[768px]">
            <div className="mb-8">
              <img src={house.imageLg} alt="" />
            </div>
            <div className="flex gap-x-6 text-orange-600 mb-8">
              <div className="flex gap-x-2 items-center">
                <BiBed className="text-2xl" />
                <div>{house.bedrooms}</div>
              </div>
              <div className="flex gap-x-2 items-center">
                <BiBath className="text-2xl" />
                <div>{house.bathrooms}</div>
              </div>
              <div className="flex gap-x-2 items-center">
                <BiArea className="text-2xl" />
                <div>{house.surface}</div>
              </div>
            </div>
            <div>{house.description}</div>
          </div>
          <div className="flex-1 bg-white w-full mb-8 border border-gray-300 rounded-lg px-6 py-8">
            <div className="flex items-center gap-x-4 mb-8">
              <div className="w-20 h-20 p-1 border border-gray-300 rounded-full">
                <img src={house.agent.image} alt="" />
              </div>
              <div>
                <div className="font-bold text-lg">{house.agent.name}</div>
                <Link to="" className="text-orange-700 text-sm">
                  View Listings
                </Link>
              </div>
            </div>
            {/* form */}
            <form className="flex flex-col gap-y-4">
              <input
                type="text"
                placeholder="Name*"
                className="border border-gray-300 focus:border-orange-700 outline-none rounded w-full px-4 h-14 text-sm "
              />
              <input
                type="text"
                placeholder="Email*"
                className="border border-gray-300 focus:border-orange-700 outline-none rounded w-full px-4 h-14 text-sm "
              />
              <input
                type="text"
                placeholder="Phone*"
                className="border border-gray-300 focus:border-orange-700 outline-none rounded w-full px-4 h-14 text-sm "
              />
              <textarea
                placeholder="Message*"
                defaultValue="Hello I'm Interested in {Modern Apartment}"
                className="border border-gray-300 focus:border-orange-700 outline-none rounded w-full px-4 h-14 text-sm resize-none"
              ></textarea>
              <div className="flex gap-2">
                <button className="bg-orange-600 rounded hover:bg-orange-800 text-white p-4 text-sm w-full transition">
                  send message
                </button>
                <button className="border border-orange-700 text-orange-700 hover:border-orange-500 hover:text-orange-500 rounded p-4 text-sm w-full transition">
                  call
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PropertyDetails;
