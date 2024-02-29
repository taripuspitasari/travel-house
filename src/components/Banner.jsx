import React from "react";
import Search from "./Search";
import {Link} from "react-router-dom";
import Image from "../assets/travel-banner.jpg";

const Banner = () => {
  return (
    <section className="relative w-full h-screen">
      <img
        src={Image}
        alt=""
        className="top-0 left-0 w-full h-screen object-cover"
      />
      <div className="bg-black/30 absolute top-0 left-0 w-full h-screen" />
      <div className="absolute top-16 w-full h-screen flex flex-col text-white items-center">
        <h2 className="font-bold text-5xl mb-4 text-center">
          Plan your <span className="text-orange-600">Trip</span> <br />
          With <span className="text-orange-600">Travel House</span>
        </h2>
        <p>The best travel your journey respectful of the environment</p>
        <Link
          to=""
          className="hover:bg-orange-700 bg-orange-600 px-3 py-2 text-white rounded-2xl font-semibold transition mt-6"
        >
          Explore Now
        </Link>
      </div>
      <Search />
    </section>
  );
};

export default Banner;
