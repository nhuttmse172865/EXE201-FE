import React from "react";
import FastBooking from "./fast-booking/FastBooking";

const Banner = () => {
  return (
    <div className="h-[70vh] mx-2.5  relative">
      <div className="bg-amber-100 w-full h-full rounded-[20px] absolute z-20 top-0 left-0">
        <h1></h1>  
        <img
    src="/src/assets/images/lovepet.jpg"
    alt="Banner"
    className="w-full h-full object-cover"
  />
      </div>
      <FastBooking />
    </div>
  );
};

export default Banner;
