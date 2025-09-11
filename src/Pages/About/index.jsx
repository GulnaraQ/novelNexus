import React from "react";
import AboutUs from "../../Components/About/AboutUs";
import Sponsors from "../../Components/About/Sponsors";
import MoreAbout from "../../Components/About/MoreAbout";
import Authors from "../../Components/Home/Authors";
import FrequentlyAskedQuestion from "../../Components/Home/FrequentlyAskedQuestion";
import Discount50 from "../../Components/Home/Discount50";
import BlogPosts from "../../Components/Home/BlogPosts";

const About = () => {
  return (
    <div>
      <AboutUs />
      <Sponsors />
      <MoreAbout />
      <Authors />
      <FrequentlyAskedQuestion />
      <Discount50 />
      <BlogPosts />
    </div>
  );
};

export default About;
