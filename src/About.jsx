import React, { useState } from 'react';
import Common from './Common';
import webImg from "../src/images/royal-bawarchi-2.jpg"

const About = () => {

    
    return(
        <>
          <Common text="Welcome to About Page"
            visit="/contact"
              imgsrc={webImg}
              btnName="Contact Now"
            />
        </>
        
    );

}

export default About;