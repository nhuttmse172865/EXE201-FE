import React from "react";
import IMAGES from "../../../../../../utils/images";

const Clinics = () => {
  return (
    <div className="w-[220px] cursor-pointer group hover:scale-105 duration-300 ease-in-out group-hover:">
      <div className="relative h-[150px] w-[220px] bg-[rgba(0,0,0,0.05)] rounded-[16px] overflow-hidden">
        <div className="bg-white w-fit px-2.5 rounded-[.375rem] flex gap-1 justify-center items-center py-0.5 absolute right-[10px] top-[10px]">
          <img src={IMAGES.star} className="w-[10px] h-[10px]" />
          <span className="text-[11px] text-[rgba(0,0,0,0.6)]">4.9</span>
        </div>
        <div className="">
          <img src={IMAGES.clinicSample} alt="" />
        </div>
      </div>
      <div className="mt-4 flex justify-between">
        <h4 className=" text-[14px] text-[rgba(0,0,0,0.6)] font-medium duration-300 ease-in-out group-hover:text-[rgba(0,0,0,0.7)]">Amily Martins</h4>
        <div className="flex items-center gap-1">
          <span className="text-[12px] text-[rgba(0,0,0,0.4)]">2km</span>
          <img src={IMAGES.location} className="w-[14px] h-[14px]" />
        </div>
      </div>
      <p className="mt-0.5 w-[80%] text-[11px] text-[rgba(0,0,0,0.4)] line-clamp-1">Lorem Ipsum is simply dummy</p>
    </div>
  );
};

export default Clinics;
