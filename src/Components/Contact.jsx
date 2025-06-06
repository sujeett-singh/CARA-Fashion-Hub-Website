import React from "react";
import Newsletter from "../Sections/Newsletter";
import Footer from "./Footer";
import contact from "../assets/About/about-banner.png";

const Contact = () => {
  const headerData = [
    {
      heading: "#StayCool",
      desc: "Save more with coupons & up to 70% off!",
      img: contact,
    },
  ];
  const formHandler = (e)=>{
    e.preventDefault();
    alert("Your Query has been submitted successfully")
  }
  
  return (
    <>
      <div className="w-full h-[100vh] bg-[#1C1C1C] text-white ">
        <div className="w-[50%] mx-auto pt-10">
          <h1 className="text-[3rem] font-bold font-serif ">Contact Me</h1>
          <h2 className="text-[2rem] font-semibold">
            Suggestion, Thoughts or Any Questions{" "}
          </h2>
          <form className="w-full h-[55vh] text-black  flex flex-col  gap-10 mt-5">
            <input
              type="text"
              placeholder=" Enter Your Name"
              className="rounded-lg h-8 p-2  outline-none"
            />
            <input
              type="text"
              placeholder=" Enter Your Email Address"
              className="rounded-lg h-8 p-2  outline-none"
            />
            <input
              type="text"
              placeholder=" Enter Your Subject"
              className="rounded-lg h-8 p-2  outline-none"
            />
            <textarea
              placeholder="Enter Your Message "
              className="rounded-lg  p-2  h-32 align-top outline-none"
            />
            <button
              type="submit"
              onClick={formHandler}
              className="bg-red-500 text-white font-bold outline-none text-[1.2rem] rounded-lg py-1 hover:scale-75"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
      <Newsletter />
      <Footer />
    </>
  );
};

export default Contact;
