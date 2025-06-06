import React from "react";
import banner from "../assets/home-page/super-sale.jpeg";
import { NavLink } from "react-router-dom";

const ExploreMore = () => {
  return (
    <section className="w-[100%] h-[40vh] flex flex-col items-center justify-center text-white relative ">
        <p className="font-bold text-[25px]">Super Sale</p>
        <h1 className="py-[10px] font-extrabold text-[2.5vmax]">
          Up to <span className="text-[#EF3636]">70% Off </span> All t-Shirt &
          Accessories
        </h1>
        <button className="px-4 py-2 bg-white text-black font-bold text-[2vmax] rounded-md loading">
          
          <NavLink to="/Shop">Explore More</NavLink>
        </button>
      {/* <SetBg bg={banner} /> */}
      <img src={banner} 
    className=" w-full h-full  absolute -z-10  left-0 bottom-0 top-0 right-0" />
    </section>
  );
};

export default ExploreMore;
