import React from "react";
import useLocalStorage from "use-local-storage";

const ServiceInfor = () => {
  const [booking, setBooking] = useLocalStorage("booking", "");
  return (
    <div className="p-[15px] bg-white rounded-[.375rem]">
      <div className="w-full h-[180px] bg-amber-200 rounded-[.375rem] overflow-hidden">
        <img className="object-cover w-full h-full" src={booking?.service?.image[0]?.url} />
      </div>
      <h4 className="mt-4 font-medium text-[15px] text-[rgba(0,0,0,0.7)] group-hover:text-[rgba(0,0,0,0.8)]">
        {booking?.service.name}
      </h4>
      <p className="text-[13px] text-[rgba(0,0,0,0.5)] w-[95%]">
        {booking?.service.description}
      </p>
    </div>
  );
};

export default ServiceInfor;
