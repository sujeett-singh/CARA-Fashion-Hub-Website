import React from "react";
import { NavLink } from "react-router-dom";
import logo from "../assets/home-page/logo.png";
import menu from "../assets/home-page/menu.png";

const Navbar = () => {
  return (
    <div className="nav-div w-[100%] shadow-sm sticky top-0 z-50  bg-[#e3e6f3] px-[80px] py-[22px]">
      <nav className=" w-[100%] home-nav flex flex-nowrap justify-between items-center">
        <img src={logo} />
        <input type="checkbox" id="check" />
        <label htmlFor="check" className="checkbtn ">
          <img src={menu} className="w-[50px] h-[40px]" />
        </label>
        <ul className="list text-black flex gap-[40px] text-[20px]  font-bold backdrop-blur-3xl  ">
          <li>
            <NavLink to="/" className="cursor-pointer">
              Home
            </NavLink>
            <div className="slider"></div>
          </li>
          <li>
            <NavLink to="/Shop" className="cursor-pointer">
              Shop
            </NavLink>
            <div className="slider"></div>
          </li>
          <li>
            <NavLink to="/Blog" className="cursor-pointer">
              Blog
            </NavLink>
            <div className="slider"></div>
          </li>
          <li>
            <NavLink to="/About" className="cursor-pointer">
              About
            </NavLink>
            <div className="slider"></div>
          </li>
          <li>
            <NavLink to="/Contact" className="cursor-pointer">
              Contact
            </NavLink>
            <div className="slider"></div>
          </li>
          <li>
            <NavLink to="/Cart" className="cursor-pointer">
              Cart
            </NavLink>
            <div className="slider"></div>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
