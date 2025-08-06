import React from "react";

const ServiceImages = () => {
  return (
    <div className="container mx-auto h-[500px] flex gap-5 pt-[70px]">
      <div className="w-[47%] h-full bg-[rgba(0,0,0,0.1)] rounded-[10px]"></div>
      <div className="w-[53%] grid grid-cols-3 gap-5">
        {Array.from({ length: 6 }).map((item) => (
          <div className="w-full f-full bg-[rgba(0,0,0,0.1)] rounded-[10px]"></div>
        ))}
      </div>
    </div>
  );
};

export default ServiceImages;
