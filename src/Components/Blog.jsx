import React from "react";
import Header from "./Header";
import BlogCard from "./BlogCard";
import Newsletter from "../Sections/Newsletter";
import Footer from "./Footer";
import "./Main.css";
import a1 from "../assets/Blog-Page/asset-1.jpeg";
import a2 from "../assets/Blog-Page/asset-2.jpeg";
import a3 from "../assets/Blog-Page/asset-3.jpeg";
import a4 from "../assets/Blog-Page/asset-4.jpeg";
import a5 from "../assets/Blog-Page/asset-5.jpeg";

import blog from "../assets/Blog-Page/Bbg.jpeg";

const Blog = () => {
  const data = [
    {
      img: a1,
      heading: "The Art of Dressing: Mastering the Aesthetics of Fashion",
      description:
        "Unleash your inner artist and explore the creative side of fashion. Dive into the principles of color theory, proportion, and texture as we delve into the artistry behind putting together visually captivating outfits. Learn how to curate ensembles that are not just stylish, but true works of art.",
    },
    {
      img: a2,
      heading: "The Art of Dressing: Mastering the Aesthetics of Fashion",
      description:
        "Unleash your inner artist and explore the creative side of fashion. Dive into the principles of color theory, proportion, and texture as we delve into the artistry behind putting together visually captivating outfits. Learn how to curate ensembles that are not just stylish, but true works of art.",
    },
    {
      img: a3,
      heading: "The Art of Dressing: Mastering the Aesthetics of Fashion",
      description:
        "Unleash your inner artist and explore the creative side of fashion. Dive into the principles of color theory, proportion, and texture as we delve into the artistry behind putting together visually captivating outfits. Learn how to curate ensembles that are not just stylish, but true works of art.",
    },
    {
      img: a4,
      heading: "The Art of Dressing: Mastering the Aesthetics of Fashion",
      description:
        "Unleash your inner artist and explore the creative side of fashion. Dive into the principles of color theory, proportion, and texture as we delve into the artistry behind putting together visually captivating outfits. Learn how to curate ensembles that are not just stylish, but true works of art.",
    },
    {
      img: a5,
      heading: "The Art of Dressing: Mastering the Aesthetics of Fashion",
      description:
        "Unleash your inner artist and explore the creative side of fashion. Dive into the principles of color theory, proportion, and texture as we delve into the artistry behind putting together visually captivating outfits. Learn how to curate ensembles that are not just stylish, but true works of art.",
    },
  ];

  const headerData = [
    {
      heading: "#Blogs",
      desc: "New Blogs, New Stuff & New Collection",
      img: blog,
    },
  ];

  return (
    <>
      <Header HData={headerData} />
      <BlogCard data={data} />
      <Newsletter />
      <Footer />
    </>
  );
};

export default Blog;
