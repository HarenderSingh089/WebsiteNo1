

import React from "react";
import Common from './Common';
import web from "../src/Images/img1.png";


const About = ()=>{
    return(
        <>
     <Common
        name="Welcome to About Page"
        imgsrc={web}
        btName="Contact Now"
        visit="/contact"
      />
        </>
    )
}

export default About;