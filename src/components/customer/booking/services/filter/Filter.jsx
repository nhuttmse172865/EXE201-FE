import React, { useState } from "react";
import IMAGES from "../../../../../utils/images";

const Filter = () => {
  const [filter, setFilter] = useState([
    "Pet Transport",
    "Nutrition Counseling",
    "Behavioral Therapy",
    "Grooming & Styling",
    "Pet Boarding",
    "24/7 Emergency Service",
    "Spa & Beauty Services",
    "Dental Care",
  ]);
  const [activeItem, setActiveItem] = useState();
  return (
    <div className="mt-[20px] flex gap-[100px]">
      <div className="w-[70%] flex flex-wrap gap-2.5">
        {filter.map((item, index) => (
          <div
            className="px-5 py-2.5 bg-[rgba(0,0,0,0.05)] text-[14px] rounded-[.375rem] text-[rgba(0,0,0,0.5)] cursor-pointer"
            style={{
              background:
                activeItem === item ? "var(--color-primary-100)" : null,
              color: activeItem === item ? "rgba(255,255,255,1)" : null,
            }}
            onClick={() => setActiveItem(item)}
          >
            {item}
          </div>
        ))}
      </div>
      <div className="w-[30%]">
        <div className="w-full h-[45px] bg-[rgba(0,0,0,0.05)] rounded-[.375rem] relative">
          <input className="w-full h-full text-[14px] text-[rgba(0,0,0,0.7)]" placeholder="Search services ..." type="text" />
          <div className="absolute right-[10px] top-[10px] w-[25px] h-[25px] flex justify-center items-center">
            <img className="w-[20px] h-[20px]" src={IMAGES.search} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Filter;
