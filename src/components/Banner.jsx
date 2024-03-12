import React from "react";
import Search from "./Search";
import {Link} from "react-router-dom";
import Image from "../assets/img/travel-banner2.jpg";

// relative w-full h-screen mb-8 xl:mb-24

// className="bg-[url('../assets/img/travel-banner.jpg')]"

const Banner = () => {
  return (
    <section className="h-full max-h-[640px] mb-8 xl:mb-24 relative">
      <div>
        <img src={Image} alt="" className="h-[600px] w-full" />
        <div className="bg-black/30 absolute h-[600px] w-full top-0 right-0" />
        <div className="absolute text-center top-28 inset-0 w-[540px] mx-auto">
          <h1 className="text-5xl text-white font-bold ">
            Plan your trip with HomeLand
          </h1>
          <p className="text-white text-m mt-4">
            The best travel your journey respectful of the environment
          </p>
          <div className="mt-8">
            <Link
              to=""
              className="text-white  hover:bg-orange-700 bg-orange-600 px-3 py-2 rounded-xl transition"
            >
              Explore Now
            </Link>
          </div>
        </div>
      </div>
      <Search />
    </section>
  );
};

export default Banner;
