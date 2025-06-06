import React from "react";
import SetHeaderBg from "./SetHeaderBg";

const Header = ({ HData }) => {
  // console.log(headerData);
  return (
    <section className=" relative w-[100%] h-auto ">
      {HData.map((data, i) => {
        return (
          <div
            key={i}
            className="text-white w-[100%] h-[40vh] bg-cover flex flex-col justify-center items-center"
            // style={{ backgroundImage: "url('../assets/Blog-Page/Bbg.jpeg')" }}
          >
            <h3 className="text-[44px] font-bold leading-[2.5rem]">
              {data.heading}
            </h3>
            <p className="text-[15px] font-semibold mt-[15px] mb-[20px] ">
              {data.desc}
            </p>
            <SetHeaderBg bg={data.img}/>
          </div>
        );
      })}
    </section>
  );
};

export default Header;
