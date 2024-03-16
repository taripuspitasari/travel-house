import React from "react";
// import react icons
import {FaFacebook, FaInstagram, FaTwitter} from "react-icons/fa";
import {TiSocialPinterest} from "react-icons/ti";

const Footer = () => {
  return (
    <footer className="bg-slate-100 h-[380px] container py-4 px-3 lg:h-[250px]">
      <div className="max-w-[1400px] mx-auto grid grid-cols-2 lg:grid-cols-5 ">
        <div className="flex gap-x-4 text-4xl py-2 col-span-2 lg:justify-start">
          <FaFacebook className="cursor-pointer" />
          <FaInstagram className="cursor-pointer" />
          <FaTwitter className="cursor-pointer" />
        </div>
        <div>
          <h6 className="font-bold py-2 ">Information</h6>
          <ul>
            <li className="py-1 cursor-pointer">Home</li>
            <li className="py-1 cursor-pointer">Explore</li>
            <li className="py-1 cursor-pointer">Travel</li>
            <li className="py-1 cursor-pointer">Blog</li>
          </ul>
        </div>
        <div>
          <h6 className="font-bold py-2">Helpfull Links</h6>
          <ul>
            <li className="py-1 cursor-pointer">Destinations</li>
            <li className="py-1 cursor-pointer">Supports</li>
            <li className="py-1 cursor-pointer">Terms & Condition</li>
            <li className="py-1 cursor-pointer">Privacy</li>
          </ul>
        </div>
        <div>
          <h6 className="font-bold py-2">Contact</h6>
          <ul>
            <li className="py-1">+62 8965 7969 212</li>
            <li className="py-1">travel_house@gmail.com</li>
          </ul>
        </div>
      </div>
      <div className="mx-auto text-center font-bold mt-3">
        Copyright &copy; 2024. All rights reserved
      </div>
    </footer>
  );
};

export default Footer;
