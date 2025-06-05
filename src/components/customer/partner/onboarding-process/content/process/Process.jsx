import React from "react";
import PROCESS_PARTNER from "../../../../../../utils/process-partner";

const Process = () => {
  return (
    <div className="flex justify-center mt-16 gap-20">
      {PROCESS_PARTNER.map((item) => (
        <div className="w-[18%] relative">
          <div className="border-[rgba(0,0,0,0.1)] border-[1px] rounded-full w-[80px] h-[80px] left-[50%] relative translate-x-[-50%] mb-7"></div>
          <div>
            <h4 className="font-family-playfair-display text-[18px] text-center text-[rgba(0,0,0,0.7)] font-medium">
              {item.name}
            </h4>
            <p className="text-[14px] mt-2 text-[rgba(0,0,0,0.5)] text-center">
              {item.description}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Process;
