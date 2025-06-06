import React from "react";
import Header from "./Header";
import Newsletter from "../Sections/Newsletter";
import Footer from "./Footer";

import ShopBg from "../assets/home-page/shop-intro-bg.jpg";
import ShopCards from "../Sections/ShopCards";

const Shop = () => {
  const headerData = [
    {
      img: ShopBg,
      heading: "#Shop",
      desc: "Save more with coupons & up to 70% off!",
    },
  ];
  return (
    <>
      <Header HData={headerData} />
      <div className="flex flex-wrap justify-center xl:justify-between px-20 py-20 gap-10">
        <ShopCards />
      </div>
      <Newsletter />
      <Footer />
    </>
  );
};

export default Shop;
