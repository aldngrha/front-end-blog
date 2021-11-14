import React from "react";
import Header from "../components/Header";
import Slider from "../components/Slider";
import TrendingPost from "../components/TrendingPost";
import FreshStories from "../components/FreshStories";
import Footer from "../components/Footer";

const LandingPage = () => {
  return (
    <>
      <Header />
      <Slider />
      <TrendingPost />
      <FreshStories />
      <Footer />
    </>
  );
};

export default LandingPage;
