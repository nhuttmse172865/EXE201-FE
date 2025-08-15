import React from "react";
import useLocalStorage from "use-local-storage";

const Total = () => {
  const [booking, setBooking] = useLocalStorage("booking", "");
  return (
    <div className="flex mt-5 justify-between bg-white rounded-[.375rem] p-[15px]">
      <h4 className="text-[15px] text-[rgba(0,0,0,0.5)]">Total</h4>
      <h4 className="text-[16px] text-(--color-primary-100)">{booking?.service?.price}$</h4>
    </div>
  );
};

export default Total;
