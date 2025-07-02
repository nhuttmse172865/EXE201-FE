import React from "react";
import FAST_BOOKING from "../../../../../utils/fast-booking";
import ElevatedButton from "../../../../common/button/elevated-button/ElevatedButton";

const FastBooking = () => {
  return (
    <div className="bg-white absolute shadow-2xl z-50  w-[1280px]  rounded-[.375rem] h-[56px] bottom-0 left-[50%] translate-x-[-50%] pl-[10px] translate-y-[50%] overflow-hidden">
      <div className=" w-full h-full flex gap-5">
        <div className="grid grid-cols-10 w-full">
          {FAST_BOOKING.map((item) => (
            <div className={`flex items-center w-full gap-2`}
              style={{
                gridColumn: `span ${item.column} / span ${item.column}`
              }}
            >
              <div className="w-[20px] h-[20px] bg-(--color-primary-100) text-[10px] text-white flex justify-center items-center rounded-full">
                {item.step}
              </div>
              <div>
                <span  className="text-[14px] text-[rgba(0,0,0,0.5)]">{item.name}</span>
              </div>
            </div>
          ))}
        </div>
        <div className=" h-full flex items-center pr-0.5">
          <ElevatedButton
            width={"200px"}
            height={"90%"}
            text={"Fast Booking"}
          />
        </div>
      </div>
    </div>
  );
};

export default FastBooking;
