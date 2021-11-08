import React from "react";
import web from "../src/Images/img1.png";
import Common from './Common'

const Home = () => {
  return (
    <>
      <Common
        name="Grow Your Business with"
        imgsrc={web}
        btName="Get Started"
        visit="/service"
      />
    </>
  );
};

export default Home;
