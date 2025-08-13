import React from "react";
import IMAGES from "../../../../utils/images";
import Clinic from "./clinic/Clinic";

const SelectClinic = () => {
  return (
    <div>
      <div className="flex justify-between">
        <div className="flex gap-2.5 items-center">
          <div className="w-[2px] bg-(--color-primary-100) h-[20px]"></div>
          <h1 className="font-family-playfair-display text-[18px] font-medium text-[rgba(0,0,0,0.8)]">
            Select Clinic
          </h1>
        </div>
        <div className="relative w-[300px] h-[40px] rounded-[0.375rem] overflow-hidden p-1 pr-[25px] border-[1px] border-(--color-title-30)">
          <input
            className="h-full w-full text-[13px] placeholder-13"
            type="text"
            placeholder="Search"
          />
          <img
            className="absolute top-[50%] right-[10px] translate-y-[-50%] w-[18px] h-[18    px]"
            src={IMAGES.search}
          />
        </div>
      </div>

      <div className="grid grid-cols-4 gap-6 mt-10">
        {Array.from({ length: 8 }).map((item) => (
          <Clinic />
        ))}
      </div>
      <div className="mt-10 mb-5 flex justify-center gap-2.5">
        {Array.from({ length: 5 }).map((item, index) => (
          <div className="w-[25px] h-[25px] bg-(--color-primary-100) rounded-[.375rem] text-[13px] flex justify-center items-center text-white">
            {index + 1}
          </div>
        ))}
      </div>
    </div>
  );
};

export default SelectClinic;
