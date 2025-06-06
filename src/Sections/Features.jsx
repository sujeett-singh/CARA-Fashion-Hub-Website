
import React, { useContext } from "react";

const Features = ({Feature}) => {
  return (
    <div className="feature-sec w-full relative bg-white px-[80px] py-[40px]">
      <div className="feature relative flex-wrap flex justify-center gap-10">
        {Feature.map((f , index) => (
          <div  key={index} className="fea border shadow-2xl shadow-transparent border-[#CCE7D0] rounded-xl my-[15px] py-[25px] px-[15PX] flex flex-col items-center hover:shadow-[#e3e6f3]">
            <img
              src={f.img}
              alt="demo"
              className="mb-[10px]"
            />
            <h5 className="text-[#088178] mt-2 py-1 px-3 font-bold text-[14px] rounded-md bg-[#FDDDE4]">
              {f.title}
            </h5>
          </div>
          
        ))}
        
      </div>
    </div>
  );
};

export default Features;
