import React from "react";

const Service = ({ item, serviceActive, setServiceActive, setBooking }) => {
  const handleOnclickItem = () => {
    setServiceActive(item);
    setBooking({ service: item });
  };
  return (
    <div
      class={`group hover:scale-105 cursor-pointer duration-300 ease-in-out ${
        serviceActive === item ? "scale-105" : null
      }`}
      onClick={() => handleOnclickItem()}
    >
      <div class="w-full h-[150px] bg-[rgba(0,0,0,0.1)] rounded-[16px] relative overflow-hidden">
        <img src={item?.image[0]?.url} className="object-cover" />
      </div>
      <div class="mt-2.5">
        <div class="flex justify-between">
          <h4
            class={`font-medium text-[14px]  ${
              serviceActive === item
                ? "text-(--color-primary-100)"
                : "text-[rgba(0,0,0,0.7)] group-hover:text-[rgba(0,0,0,0.8)]"
            }`}
          >
            {item?.name}
          </h4>
          <h4 class="text-[14px] font-medium text-(--color-primary-100)">
            ${item?.price}
          </h4>
        </div>
      </div>
    </div>
  );
};

export default Service;
