import React, { useState } from "react";
import PAYMENT_METHOD from "../../../../utils/payment-method";

const Payment = () => {
  const [methodSelected, setMethodSelected] = useState();

  return (
    <div className="p-[15px] bg-white rounded-[.375rem]">
      <div className="flex gap-2.5 items-center">
        <div className="w-[2px] bg-(--color-primary-100) h-[20px]"></div>
        <h1 className="font-family-playfair-display text-[18px] font-medium text-[rgba(0,0,0,0.8)]">
          Payment Method
        </h1>
      </div>

      <div className="mt-5 flex flex-wrap gap-5">
        {PAYMENT_METHOD.map((item) => (
          <div
            className={`cursor-pointer h-[80px] w-[450px] flex justify-center items-center gap-5 border-[1px] rounded-[.375rem]  ${
              methodSelected === item
                ? "border-(--color-primary-100)"
                : "border-[rgba(0,0,0,0.15)]"
            }`}
            onClick={() => setMethodSelected(item)}
          >
            <img className="w-[50px] h-[50px]" src={item.icon} />
            <span
              className={`text-[15px]  ${
                methodSelected === item
                  ? "text-(--color-primary-100)"
                  : "text-[rgba(0,0,0,0.8)]"
              }`}
            >
              {item.name}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Payment;
