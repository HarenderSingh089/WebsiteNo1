import React from "react";
import SData from './SData'
import Card from "./Card";

const Service = () => {
  return (
    <>
      <div className="my-5">
        <h1 className=" text-center">Our Services</h1>
      </div>
      <div className="container-fluid mb-5">
        <div className="row">
          <div className="col-10 mx-auto">
            <div className="row gy-4">
              {
                SData.map((data,i)=>{
                  return <Card key={i} imgscr={data.imgscr} title={data.title}/>
                })
              }
           
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Service;
