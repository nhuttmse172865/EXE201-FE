import React from "react";
import IMAGES from "../../../../../utils/images";

const Service = () => {
  return (
    <div class="group hover:scale-105 cursor-pointer duration-300 ease-in-out">
      <div class="w-full h-[150px] bg-[rgba(0,0,0,0.1)] rounded-[16px] relative">
        
      </div>
      <div class="mt-2.5">
        <div class="flex justify-between">
          <h4 class="font-medium text-[14px] text-[rgba(0,0,0,0.7)] group-hover:text-[rgba(0,0,0,0.8)]">
            Grooming &amp; Styling
          </h4>
          <h4 class="text-[14px] font-medium text-(--color-primary-100)">
            $20
          </h4>
        </div>
      </div>
    </div>
  );
};

export default Service;
