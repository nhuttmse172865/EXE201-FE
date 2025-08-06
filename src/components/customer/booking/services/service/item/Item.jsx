import React from "react";
import IMAGES from "../../../../../../utils/images";
import { useNavigate } from "react-router-dom";

const Item = () => {
  const navigate = useNavigate();

  return (
    <div className="group hover:scale-105 cursor-pointer duration-300 ease-in-out"
        onClick={() => navigate("service-detail/1")}
    >
      <div className="w-full h-[200px] bg-[rgba(0,0,0,0.1)] rounded-[16px] relative">
        <div className="absolute right-[15px] top-[15px] w-fit flex flex-col items-end">
          <h4 className="font-family-playfair-display text-[15px] line-clamp-1">
            Amalfi Coast
          </h4>
          <div className="flex items-center gap-2.5">
            <p className="text-end text-[12px] text-[rgba(0,0,0,0.5)] mt-0.5 line-clamp-2">
              District 2, HCM
            </p>
            <img className="w-[15px] h-[15px]" src={IMAGES.location} />
          </div>
        </div>
      </div>
      <div className="mt-2.5">
        <div className="flex justify-between">
          <h4 className="text-[18px] font-medium text-(--color-primary-100)">$20</h4>
          <span className="text-[13px] text-[rgba(0,0,0,0.5)]">Used: 60</span>
        </div>
        <div className="mt-1">
          <h4 className="font-medium text-[15px] text-[rgba(0,0,0,0.7)] group-hover:text-[rgba(0,0,0,0.8)]">
            Grooming & Styling
          </h4>
          <p className="text-[13px] text-[rgba(0,0,0,0.5)] w-[95%]">
            Help your pet stay clean, fresh, and look their best.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Item;
