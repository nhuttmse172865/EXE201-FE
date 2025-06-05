import React from "react";
import PROCESS_PARTNER from "../../../../../../utils/process-partner";

const Process = () => {
  return (
    <div className="flex justify-center mt-16">
      {PROCESS_PARTNER.map((item, index) => (
        <div className="w-[23%] relative border-l-[1px] h-[280px] border-[rgba(37,28,28,0.1)] px-5 justify-between">
          <div>
            <span className="text-[40px] m-0 text-(--color-primary-100)">{`0${index + 1}.`}</span>
            <h4 className="text-[25px] w-[80%] text-[rgba(0,0,0,0.8)] font-light">{item.name}</h4>
          </div>
          <div className="absolute top-[70%] h-[60px] overflow-ellipsis line-clamp-3">
            <p className="text-[14px] text-[rgba(0,0,0,0.5)] pr-5">{item.description}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Process;
