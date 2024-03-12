import React from "react";
import {Link} from "react-router-dom";
import Logo from "../assets/img/logo.svg";

const Header = () => {
  return (
    <header className="py-6 border-b">
      <div className="container flex mx-auto justify-between items-center">
        <Link to="/">
          <img src={Logo} />
        </Link>
        {/* buttons */}
        <div className="flex gap-6 items-center">
          <Link
            to=""
            className="hover:bg-slate-100 px-3 py-2 rounded-2xl transition"
          >
            Home
          </Link>
          <Link
            to=""
            className="hover:bg-slate-100 px-3 py-2 rounded-2xl transition"
          >
            Product
          </Link>
          <Link
            to=""
            className="hover:bg-slate-100 px-3 py-2 rounded-2xl transition"
          >
            Contact
          </Link>
          <Link
            to=""
            className="hover:bg-slate-100 px-3 py-2 rounded-2xl transition"
          >
            Blog
          </Link>
        </div>
        {/* buttons login */}
        <div className="flex gap-7 items-center">
          <Link
            to=""
            className="hover:bg-slate-100 px-3 py-2 rounded-2xl transition"
          >
            Log in
          </Link>
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
