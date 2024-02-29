import React from "react";
import {Link} from "react-router-dom";
import Logo from "../assets/logo.svg";

const Header = () => {
  return (
    <header className="py-6 mb-6 border-b">
      <div className="container flex mx-auto justify-between items-center">
        <Link to="/">
          <img src={Logo} />
        </Link>
        {/* buttons */}
        <div className="flex gap-6 items-center">
          <Link to="">Home</Link>
          <Link to="">Product</Link>
          <Link to="">Contanct</Link>
          <Link to="">Blog</Link>
        </div>
        {/* buttons login */}
        <div className="flex gap-7 items-center">
          <Link to="">Log in</Link>
          <Link
            to=""
            className="bg-white  hover:bg-slate-100 text-orange-600 px-3 py-2 rounded-2xl transition font-bold"
          >
            Sign Up
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;
