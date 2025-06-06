import React, { useContext } from "react";
import textBg from "../assets/home-page/Hero/hero-bg-print.png";

import { NavLink } from "react-router-dom";
import blob from "../assets/home-page/Hero/blob.png";

const Hero = () => {
  return (
    <section
      className=" bg-red-400 hero hero-bg overflow-hidden items-start  w-mx-auto relative px-[110px]"
    >
      <img
        src={blob}
        width="35%"
        className="blob absolute z-10 top-[18%] left-[2%] animate-[pulse_1s_ease-in-out_infinite]"
      />

      <div className="hero-text relative h-[90vh] flex flex-col justify-center z-10">
        <p className="hero-p1 text-[20px] font-bold pb-[15px]">
          Trade-in-offer
        </p>
        <h1 className="hero-h1 text-[50px] font-bold leading-[1.1]">
          Super value deals <br />
          <span className="text-[#088178]">On all products</span>
        </h1>
        <p className="hero-p font-serif mt-[15px] font-bold opacity-70 mb-[20px] tracking-[2px]">
          Save more with coupons & up to 70% off!
        </p>
        <NavLink to="/Shop" className="hero-link w-[17vw]">
          <div className="hero-button relative hover:scale-110 hover:text-[18px]">
            <img src={textBg} alt="" className="ml-[10%]" />
            <p className="absolute top-[25%] left-[40%] font-extrabold text-[#088178]">
              Shop Now
            </p>
          </div>
        </NavLink>
      </div>
    </section>
  );
};

export default Hero;
