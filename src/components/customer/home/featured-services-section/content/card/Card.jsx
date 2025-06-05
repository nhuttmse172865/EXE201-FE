import React from "react";

const Card = ({
  nameService,
  descriptionService,
  nameClinic,
  addressClinic,
  used,
}) => {
  return (
    <div className="h-[300px] flex-shrink-0 w-[239px] bg-[rgba(0,0,0,0.1)] rounded-[16px] p-3.5 relative cursor-pointer">
      <h4 className="font-family-playfair-display text-[16px] line-clamp-1">
        {nameService}
      </h4>
      <p className="text-[12px] text-[rgba(0,0,0,0.5)] mt-0.5 line-clamp-2">
        {descriptionService}
      </p>

      <div className="absolute bottom-0 right-0">
        <div className="flex justify-end">
          <div className="bg-white pt-2 rounded-tl-[8px] relative">
            <p className="text-[12px] w-fit text-right px-3.5 text-[rgba(0,0,0,0.5)] ">
              Used: {used}
            </p>
            <div className="absolute w-[16px] h-[16px] right-full bottom-0">
              <div className="bg-[rgba(0,0,0,0.1)] w-full h-full absolute z-10 rounded-br-[8px]"></div>
              <div className="bg-white w-full h-full absolute z-0"></div>
            </div>
            <div className="absolute w-[16px] h-[16px] right-0 bottom-full">
              <div className="bg-[rgba(0,0,0,0.1)] w-full h-full absolute z-10 rounded-br-[8px]"></div>
              <div className="bg-white w-full h-full absolute z-0"></div>
            </div>
          </div>
        </div>
        <div className="flex gap-2.5  bg-white pt-2.5 pl-2.5 rounded-tl-[16px] relative">
          <div className="flex flex-col justify-end">
            <h4 className="text-[13px] text-right font-medium text-[rgba(0,0,0,0.8)] max-w-[130px] line-clamp-1">
              {nameClinic}
            </h4>
            <p className="text-[11px] text-right text-[rgba(0,0,0,0.5)] mt-0.5 max-w-[135px] line-clamp-1">
              {addressClinic}
            </p>
          </div>
          <div>
            <div className="w-[40px] h-[40px] bg-[rgba(0,0,0,0.1)] rounded-full"></div>
          </div>

          <div className="absolute bg-amber-200 w-[16px] h-[16px] right-full bottom-0">
            <div className="bg-[rgba(0,0,0,0.1)] w-full h-full absolute z-10 rounded-br-[16px]"></div>
            <div className="bg-white w-full h-full absolute z-0"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
