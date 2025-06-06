import React from "react";
import Hero from "../Sections/Hero";
import Newsletter from "../Sections/Newsletter";
import FeaturedProducts from "../Sections/FeaturedProducts";
import NewArrivals from "../Sections/NewArrivals";
import ExploreMore from "../Sections/ExploreMore";
import Footer from "./Footer";
import FeaturesDetails from "./FeaturesDetails";
import SalesCard from "../Sections/SalesCard";
import NewCollection from "../Sections/NewCollection";

const Home = () => {
  return (
    <>
      <Hero />
      <FeaturesDetails />
      <FeaturedProducts />
      <ExploreMore />
      <NewArrivals />
      <SalesCard />
      <NewCollection />
      <Newsletter />
      <Footer />
    </>
  );
};

export default Home;
