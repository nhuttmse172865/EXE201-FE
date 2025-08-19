import React from "react";
import useLocalStorage from "use-local-storage";

const TimeInfor = () => {
  const [booking, setBooking] = useLocalStorage("booking", "");
  return (
    <div className="mt-5 p-[15px] bg-white rounded-[.375rem]">
      <h4 className="text-[15px] text-[rgba(0,0,0,0.8)]">{`${
        booking?.time ? `${booking?.time}  |  ` : ""
      }${booking?.date}`}</h4>
    </div>
  );
};

export default TimeInfor;
