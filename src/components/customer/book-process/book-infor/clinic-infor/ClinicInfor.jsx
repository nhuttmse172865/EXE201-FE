import React from "react";
import IMAGES from "../../../../../utils/images";

const ClinicInfor = ({booking}) => {
  return (
    <div className="mt-5 p-[15px] bg-white rounded-[.375rem]">
      <h4 className="font-medium text-[15px] text-[rgba(0,0,0,0.7)] group-hover:text-[rgba(0,0,0,0.8)]">
        {booking?.clinic?.name}
      </h4>
      <div class="flex items-center mt-1.5 gap-2">
        <img alt="location" src={IMAGES.location} class="w-[20px] h-[20px]" />
        <p class="text-[14px] text-[rgba(0,0,0,0.5)]">

          {booking?.clinic?.address}
        </p>
      </div>
      <p className="text-[12px] text-end italic text-(--color-primary-100) cursor-pointer">
        View on Google Map
      </p>
    </div>
  );
};

export default ClinicInfor;
