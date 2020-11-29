import React from "react";
import { NavLink } from "react-router-dom";
import webImg from "../src/images/royal-bawarchi-1.jpg"
import Common from "./Common";
// import { jquery } from "jquery";


const Home = () => {
  return (
    <>
      <Common text="Royal Bawarchi Restaurant"
            visit="/about"
              imgsrc={webImg}
              btnName="Get Started"
            />
    </>
  );
};

export default Home;
