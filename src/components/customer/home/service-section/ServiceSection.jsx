import React, {useRef } from "react";
import useIsInViewport from "../../../../hooks/useIsInViewport";

const ServiceSection = () => {
  const serviceSectionRef = useRef(null);
  const inView = useIsInViewport(serviceSectionRef, { threshold: 0.1 });
  return (
    <div
      className={`morph-in-item ${inView ? "morph-in-active" : ""}`}
      ref={serviceSectionRef}
    >
      <div className="mx-auto container w-[100%] h-[100%] relative">
        <div className=" absolute w-[28vw] bg-white p-5 pl-0 rounded-br-2xl z-40">
          <h1 className="text-[25px] font-family-playfair-display text-(--color-title-100)">
            Need professional advice for your vet? Our online consulting service
            is always ready to support you!
          </h1>
          <div className="bg-white w-[16px] h-[16px] z-50 absolute top-0 left-[100%] rounded-br-[50px]"></div>
          <div className="bg-[#f2f2f2] w-[16px] h-[16px] z-50 absolute top-0 left-[100%] rounded-tl-2xl "></div>
          <div className="bg-white w-[16px] h-[16px] z-50 absolute top-[100%] left-[0] rounded-br-[50px]"></div>
          <div className="bg-[#f2f2f2] w-[16px] h-[16px] z-50 absolute top-[100%] left-[0] rounded-tl-2xl "></div>
        </div>
        <div className="h-[500px] relative overflow-hidden flex gap-[20px]">
          <div className="bg-[rgba(0,0,0,0.05)] h-full w-[60%] rounded-2xl overflow-hidden"></div>
          <div className="bg-[rgba(0,0,0,0.05)] h-full w-[40%] rounded-2xl overflow-hidden"></div>
        </div>
      </div>
    </div>
  );
};

export default ServiceSection;
