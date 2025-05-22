import React from "react";
import IMAGES from "../../../../../../utils/images";
import OutlineButton from "../../../../../common/button/outline-button/OutlineButton";

const VeterinaryCard = () => {
  return (
    <div>
      <div className="bg-[rgba(0,0,0,0.1)] h-[200px] rounded-[16px] relative">
        <div className="absolute bg-white px-2.5 py-0.5 rounded-[.375rem] top-[10px] right-[10px] flex justify-center items-center gap-1.5">
          <img src={IMAGES.star} alt="star" className="w-[15px] h-[15px]"/>
          <span className="text-[13px] text-[rgba(0,0,0,0.5)] text-center translate-y-[1px]">4.9</span>
        </div>
      </div>
      <div className="mt-2.5 flex justify-between">
        <div className="py-2">
          <h3 className="font-medium text-[rgba(0,0,0,0.7)]">Amalfi Coast</h3>
          <div className="flex items-center mt-1.5 gap-2">
            <img src={IMAGES.location} alt="location" className="w-[20px] h-[20px]" />
            <p className="text-[14px] text-[rgba(0,0,0,0.5)]">District 2, HCM</p>
          </div>
        </div>
        <div className="flex items-center pr-2.5">
            <div className="flex gap-1 items-center">
                <p className="text-[14px] cursor-pointer text-[rgba(0,0,0,0.7)] hover:text-[rgba(0,0,0,1)]">View</p>
                <img src={IMAGES.arrowRight} className="w-[20px] h-[20px]"/>
            </div>
        </div>
      </div>
    </div>
  );
};

export default VeterinaryCard;
