import React, { useState } from "react";
import Logo from "../assets/Images/Logo-removebg-preview.png";
import { Link } from "react-router-dom";
import { BsTelephone } from "react-icons/bs";
import { CiShop } from "react-icons/ci";
import { FiMenu, FiX } from "react-icons/fi";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <nav className="h-28 sm:h-36 md:h-40 flex justify-between items-center bg-[#f5e9dc] shadow-lg px-4 sm:px-8 transition-all duration-300 relative z-50">
      {/* Logo */}
      <Link to="/">
      <img
        className="h-full max-h-20 sm:max-h-28 md:max-h-36 cursor-pointer transition-transform duration-300 hover:scale-105"
        src={Logo}
        alt="Logo"
      />
      </Link>

      {/* Desktop Links */}
      <div className="hidden sm:flex w-full max-w-xl md:max-w-2xl lg:w-[32rem] justify-between mx-6">
        <Link
          className="font-bold text-base sm:text-lg md:text-xl text-[#7c4a03] hover:text-[#b97a3c] hover:border-b-2 hover:border-[#b97a3c] transition-colors duration-200 px-2 sm:px-3 py-1"
          style={{ fontFamily: "myfont" }}
          to="/"
        >
          Home
        </Link>
        <Link
          className="font-bold text-base sm:text-lg md:text-xl text-[#7c4a03] hover:text-[#b97a3c] hover:border-b-2 hover:border-[#b97a3c] transition-colors duration-200 px-2 sm:px-3 py-1"
          style={{ fontFamily: "myfont" }}
          to="/about"
        >
          About
        </Link>
        <Link
          className="font-bold text-base sm:text-lg md:text-xl text-[#7c4a03] hover:text-[#b97a3c] hover:border-b-2 hover:border-[#b97a3c] transition-colors duration-200 px-2 sm:px-3 py-1"
          style={{ fontFamily: "myfont" }}
          to="/product"
        >
          Products
        </Link>
        <Link
          className="font-bold text-base sm:text-lg md:text-xl text-[#7c4a03] hover:text-[#b97a3c] hover:border-b-2 hover:border-[#b97a3c] transition-colors duration-200 px-2 sm:px-3 py-1"
          style={{ fontFamily: "myfont" }}
          to="/contact"
        >
          Contact
        </Link>
      </div>

      {/* Desktop Icons */}
      <div className="hidden sm:flex justify-between w-20 md:w-[6rem] items-center">
        <Link to="/contact">
          <BsTelephone className="size-6 md:size-7 hover:scale-110 hover:rotate-12 duration-500 text-[#7c4a03] hover:text-[#b97a3c] transition-colors cursor-pointer" />
        </Link>
        <Link to="/product">
          <CiShop className="size-7 md:size-9 hover:scale-110 hover:rotate-12 duration-500 text-[#7c4a03] hover:text-[#b97a3c] transition-colors cursor-pointer" />
        </Link>
      </div>

      {/* Hamburger Menu (Mobile) */}
      <button
        className="sm:hidden cursor-pointer flex items-center justify-center text-[#7c4a03] text-3xl focus:outline-none"
        onClick={() => setOpen(!open)}
        aria-label="Open menu"
      >
        {open ? <FiX /> : <FiMenu />}
      </button>

      {/* Mobile Menu */}
      {open && (
        <div className="sm:hidden fixed inset-0 bg-black/40 z-50 flex flex-col">
          <div className="bg-[#f5e9dc] shadow-lg flex flex-col items-center pt-8 pb-6 px-6 gap-6 absolute top-0 left-0 right-0 rounded-b-3xl">
            <img
              className="h-16 mb-2"
              src={Logo}
              alt="Logo"
            />
            <Link
              className="font-bold text-lg text-[#7c4a03] hover:text-[#b97a3c] transition-colors duration-200"
              style={{ fontFamily: "myfont" }}
              to="/"
              onClick={() => setOpen(false)}
            >
              Home
            </Link>
            <Link
              className="font-bold text-lg text-[#7c4a03] hover:text-[#b97a3c] transition-colors duration-200"
              style={{ fontFamily: "myfont" }}
              to="/about"
              onClick={() => setOpen(false)}
            >
              About
            </Link>
            <Link
              className="font-bold text-lg text-[#7c4a03] hover:text-[#b97a3c] transition-colors duration-200"
              style={{ fontFamily: "myfont" }}
              to="/product"
              onClick={() => setOpen(false)}
            >
              Products
            </Link>
            <Link
              className="font-bold text-lg text-[#7c4a03] hover:text-[#b97a3c] transition-colors duration-200"
              style={{ fontFamily: "myfont" }}
              to="/contact"
              onClick={() => setOpen(false)}
            >
              Contact
            </Link>
            <div className="flex gap-6 mt-4">
              <Link to="/contact" onClick={() => setOpen(false)}>
                <BsTelephone className="size-7 hover:scale-110 hover:rotate-12 duration-500 text-[#7c4a03] hover:text-[#b97a3c] transition-colors cursor-pointer" />
              </Link>
              <Link to="/product" onClick={() => setOpen(false)}>
                <CiShop className="size-9 hover:scale-110 hover:rotate-12 duration-500 text-[#7c4a03] hover:text-[#b97a3c] transition-colors cursor-pointer" />
              </Link>
            </div>
          </div>
          {/* Click outside to close */}
          <div className="flex-1" onClick={() => setOpen(false)} />
        </div>
      )}
    </nav>
  );
};

export default Navbar;