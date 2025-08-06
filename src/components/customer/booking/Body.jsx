import React from "react";
import Banner from "./banner/Banner";
import Services from "./services/Services";

const Body = () => {
  return (
    <div className="min-h-[calc(100vh-70px)]">
      <Banner />
      <Services />
    </div>
  );
};

export default Body;
