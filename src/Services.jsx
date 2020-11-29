import React from "react";
// import {useParams} from 'react-router-dom';
import logo from "../src/images/royal-bawarchi.png";
import MenuCard from "./MenuCard";
import Sdata from './Sdata';

const Services = () => {
  return (
      <>
      <div className="my-5">
        <h1 className="text-center">Our Menu</h1>
      </div>

    <div className="container-fluid mb-5 ml-3">
      <div className="row">
        <div className="col-10 max-auto max_auto">
            <div className="row gy-4 gx-4">

            {
                Sdata.map(
                    (data, index) => {
                       return <MenuCard key={index} src={data.imgsrc}
                    title={data.title}
                    text={data.text}                    
                />

                    }
                )
            }


                
        

                
            </div>
        </div>
      </div>
    </div>
    </>
  );
};

export default Services;
