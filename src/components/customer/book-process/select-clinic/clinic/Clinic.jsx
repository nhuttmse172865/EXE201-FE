import React from "react";
import IMAGES from "../../../../../utils/images";
import useLocalStorage from "use-local-storage";

const Clinic = ({
  item,
  setClinicActive,
  clinicActive,
  setBooking,
  booking,
}) => {
  const handleOnClickItem = () => {
    setClinicActive(item);
    setBooking({ service: booking.service, clinic: item });
  };

  return (
    <div
      class={`group hover:scale-105 cursor-pointer duration-300 ease-in-out ${
        clinicActive === item ? "scale-105" : null
      }`}
      onClick={() => handleOnClickItem()}
    >
      <div class="bg-[rgba(0,0,0,0.1)] h-[170px] rounded-[16px] relative overflow-hidden">
        {/* <img
          alt=""
          class="object-cover min-w-full min-h-full translate-y-[-50%] relative top-[50%]"
          src=""
        /> */}
        <div class="absolute bg-white px-2.5 py-0.5 rounded-[.375rem] top-[10px] right-[10px] flex justify-center items-center gap-1.5">
          <img alt="star" class="w-[15px] h-[15px]" src={IMAGES.star} />
          <span class="text-[12px] text-[rgba(0,0,0,0.5)] text-center translate-y-[1px]">
            4.9
          </span>
        </div>
      </div>
      <div class="mt-2 flex justify-between">
        <div class="py-1.5">
          <h3
            class={` text-[13px] font-medium   ${
              clinicActive === item
                ? "text-(--color-primary-100)"
                : "text-[rgba(0,0,0,0.7)] group-hover:text-[rgba(0,0,0,0.8)]"
            }`}
          >
            {item?.name}
          </h3>
          <div class="flex items-center mt-1 gap-2">
            <img
              alt="location"
              class="w-[15px] h-[15px]"
              src={IMAGES.location}
            />
            <p class="text-[12px] text-[rgba(0,0,0,0.5)]"> {item?.address}</p>
          </div>
        </div>
        <div class="flex items-center pr-2">
          <div class="flex gap-1 items-center">
            <p class="text-[12px] cursor-pointer text-[rgba(0,0,0,0.7)] hover:text-[rgba(0,0,0,1)]">
              View
            </p>
            <img class="w-[20px] h-[20px]" src={IMAGES.arrowRight} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Clinic;
