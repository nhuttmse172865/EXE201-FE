import React from "react";
import ServiceImages from "./service-image/ServiceImages";
import Information from "./information/Information";
import Description from "./description/Description";
import Location from "./location/Location";

const Body = () => {
  return (
    <div className="min-h-[calc(100vh-200px)] relative">
      <ServiceImages />
      <Information />
      <Description />
      <Location />
    </div>
  );
};

export default Body;
