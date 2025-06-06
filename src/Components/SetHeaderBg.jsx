import React from "react";

const SetHeaderBg = ({bg}) => {
  return (
    <img
      src={bg}
      className=" w-full h-full  absolute -z-10  left-0 bottom-0 top-0 right-0"
    />
  );
};

export default SetHeaderBg;
